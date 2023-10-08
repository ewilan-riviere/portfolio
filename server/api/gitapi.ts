import { ofetch } from 'ofetch'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

export default defineEventHandler(async (event) => {
  const queryParams = getQuery(event)

  const url = queryParams.url as string
  if (!url) {
    return {
      status: 400,
      data: { error: 'Missing url query parameter' },
    }
  }

  let status = 200
  let message = 'unknown error'
  let git: GitApi = {}
  let type: 'github' | 'gitlab' | undefined
  let urlReadme: string | undefined

  if (url.includes('github'))
    type = 'github'
  if (url.includes('gitlab'))
    type = 'gitlab'

  if (type === 'github') {
    const { githubToken } = useRuntimeConfig()
    const res = await ofetch.raw(url, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
      },
    })
    status = res.status
    message = res.statusText
    const github = res._data as GitHubApi

    git = {
      id: github.id,
      name: github.name,
      full_name: github.full_name,
      description: github.description,
      description_html: github.description,
      avatar_url: github.owner?.avatar_url,
      created_at: github.created_at,
      updated_at: github.updated_at,
      private: github.private,
      owner: {
        id: github.owner?.id,
        name: github.owner?.login,
        type: github.owner?.type,
        avatar_url: github.owner?.avatar_url,
        html_url: github.owner?.html_url,
      },
      html_url: github.html_url,
      stars_count: github.stargazers_count,
      language: github.language,
      topics: github.topics,
      open_issues_count: github.open_issues_count,
      archived: github.archived,
      git_url: github.clone_url,
      homepage: github.homepage,
      license: github.license?.name,
      default_branch: github.default_branch,
    }
  }
  else if (type === 'gitlab') {
    const { gitlabToken } = useRuntimeConfig()
    const res = await ofetch.raw(`${url}?license=true`, {
      headers: {
        'PRIVATE-TOKEN': gitlabToken,
      },
    })
    status = res.status
    message = res.statusText
    const gitlab = res._data as GitLabApi

    git = {
      id: gitlab.id,
      name: gitlab.path,
      full_name: gitlab.path_with_namespace,
      description: gitlab.description,
      description_html: gitlab.description_html,
      avatar_url: gitlab.avatar_url,
      created_at: gitlab.created_at,
      updated_at: gitlab.updated_at,
      private: gitlab.visibility === 'private',
      owner: {
        id: gitlab.namespace?.id,
        name: gitlab.namespace?.path,
        type: gitlab.namespace?.kind,
        avatar_url: gitlab.namespace?.avatar_url,
        html_url: gitlab.namespace?.web_url,
      },
      html_url: gitlab.web_url,
      stars_count: gitlab.star_count,
      // language: gitlab.language,
      topics: gitlab.topics,
      open_issues_count: gitlab.open_issues_count,
      archived: gitlab.archived,
      git_url: gitlab.http_url_to_repo,
      license: gitlab.license?.name,
      default_branch: gitlab.default_branch,
    }
  }

  if (type === 'github')
    urlReadme = `https://raw.githubusercontent.com/${git.full_name}/${git.default_branch}`
  else if (type === 'gitlab')
    urlReadme = `https://gitlab.com/${git.full_name}/-/raw/${git.default_branch}`

  if (urlReadme) {
    const resReadme = await ofetch.raw(`${urlReadme}/README.md`)
    const readme = resReadme._data as string
    const md = new MarkdownIt({
      highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value
          }
          catch (__) {}
        }

        return ''
      },
    })
    git.readme = md.render(readme)
    git.readme_url = `${git.html_url}#readme`
  }

  return {
    status,
    message,
    type,
    data: git,
  }
})

export interface GitApi {
  id?: number // id / id
  name?: string // name / path
  full_name?: string // full_name / path_with_namespace
  description?: string // description / description
  description_html?: string // description / description_html
  avatar_url?: string // owner.avatar_url / avatar_url
  created_at?: Date // created_at / created_at
  updated_at?: Date // updated_at / updated_at
  private?: boolean // private / visibility='private'
  owner?: {
    id?: number
    name?: string // login / path
    type?: string // type / kind
    avatar_url?: string // avatar_url / avatar_url
    html_url?: string // html_url / web_url
  }
  html_url?: string // html_url / web_url
  stars_count?: number // stargazers_count / star_count
  language?: string // language / language // https://gitlab.com/api/v4/projects/46528109/languages
  topics?: string[] // topics / topics
  open_issues_count?: number // open_issues_count / open_issues_count
  archived?: boolean // archived / archived
  git_url?: string // clone_url / http_url_to_repo
  homepage?: string // homepage / undefined
  license?: string // license.name / license.name
  default_branch?: string // default_branch / default_branch
  readme_url?: string
  readme?: string
}

interface GitHubApi {
  id?: number
  node_id?: string
  name?: string
  full_name?: string
  private?: boolean
  owner?: {
    login?: string
    id?: number
    node_id?: string
    avatar_url?: string
    gravatar_id?: string
    url?: string
    html_url?: string
    followers_url?: string
    following_url?: string
    gists_url?: string
    starred_url?: string
    subscriptions_url?: string
    organizations_url?: string
    repos_url?: string
    events_url?: string
    received_events_url?: string
    type?: string
    site_admin?: boolean
  }
  html_url?: string
  description?: string
  fork?: boolean
  url?: string
  forks_url?: string
  keys_url?: string
  collaborators_url?: string
  teams_url?: string
  hooks_url?: string
  issue_events_url?: string
  events_url?: string
  assignees_url?: string
  branches_url?: string
  tags_url?: string
  blobs_url?: string
  git_tags_url?: string
  git_refs_url?: string
  trees_url?: string
  statuses_url?: string
  languages_url?: string
  stargazers_url?: string
  contributors_url?: string
  subscribers_url?: string
  subscription_url?: string
  commits_url?: string
  git_commits_url?: string
  comments_url?: string
  issue_comment_url?: string
  contents_url?: string
  compare_url?: string
  merges_url?: string
  archive_url?: string
  downloads_url?: string
  issues_url?: string
  pulls_url?: string
  milestones_url?: string
  notifications_url?: string
  labels_url?: string
  releases_url?: string
  deployments_url?: string
  created_at?: Date
  updated_at?: Date
  pushed_at?: Date
  git_url?: string
  ssh_url?: string
  clone_url?: string
  svn_url?: string
  homepage?: string
  size?: number
  stargazers_count?: number
  watchers_count?: number
  language?: string
  has_issues?: boolean
  has_projects?: boolean
  has_downloads?: boolean
  has_wiki?: boolean
  has_pages?: boolean
  has_discussions?: boolean
  forks_count?: number
  mirror_url?: null
  archived?: boolean
  disabled?: boolean
  open_issues_count?: number
  license?: {
    key?: string
    name?: string
    spdx_id?: string
    url?: string
    node_id?: string
  }
  allow_forking?: boolean
  is_template?: boolean
  web_commit_signoff_required?: boolean
  topics?: string[]
  visibility?: string
  forks?: number
  open_issues?: number
  watchers?: number
  default_branch?: string
  temp_clone_token?: null
  organization?: {
    login?: string
    id?: number
    node_id?: string
    avatar_url?: string
    gravatar_id?: string
    url?: string
    html_url?: string
    followers_url?: string
    following_url?: string
    gists_url?: string
    starred_url?: string
    subscriptions_url?: string
    organizations_url?: string
    repos_url?: string
    events_url?: string
    received_events_url?: string
    type?: string
    site_admin?: boolean
  }
  network_count?: number
  subscribers_count?: number
}

interface GitLabApi {
  id?: number
  description?: string
  name?: string
  name_with_namespace?: string
  path?: string
  path_with_namespace?: string
  created_at?: Date
  default_branch?: string
  tag_list?: string[]
  topics?: string[]
  ssh_url_to_repo?: string
  http_url_to_repo?: string
  web_url?: string
  readme_url?: string
  forks_count?: number
  avatar_url?: string
  star_count?: number
  last_activity_at?: Date
  namespace?: {
    id?: number
    name?: string
    path?: string
    kind?: string
    full_path?: string
    parent_id?: null
    avatar_url?: string
    web_url?: string
  }
  container_registry_image_prefix?: string
  _links?: {
    self?: string
    issues?: string
    merge_requests?: string
    repo_branches?: string
    labels?: string
    events?: string
    members?: string
    cluster_agents?: string
  }
  packages_enabled?: boolean
  empty_repo?: boolean
  archived?: boolean
  visibility?: string
  resolve_outdated_diff_discussions?: boolean
  container_expiration_policy?: {
    cadence?: string
    enabled?: boolean
    keep_n?: number
    older_than?: string
    name_regex?: string
    name_regex_keep?: null
    next_run_at?: Date
  }
  issues_enabled?: boolean
  merge_requests_enabled?: boolean
  wiki_enabled?: boolean
  jobs_enabled?: boolean
  snippets_enabled?: boolean
  container_registry_enabled?: boolean
  service_desk_enabled?: boolean
  service_desk_address?: string
  can_create_merge_request_in?: boolean
  issues_access_level?: string
  repository_access_level?: string
  merge_requests_access_level?: string
  forking_access_level?: string
  wiki_access_level?: string
  builds_access_level?: string
  snippets_access_level?: string
  pages_access_level?: string
  analytics_access_level?: string
  container_registry_access_level?: string
  security_and_compliance_access_level?: string
  releases_access_level?: string
  environments_access_level?: string
  feature_flags_access_level?: string
  infrastructure_access_level?: string
  monitor_access_level?: string
  emails_disabled?: boolean
  emails_enabled?: boolean
  shared_runners_enabled?: boolean
  lfs_enabled?: boolean
  creator_id?: number
  import_url?: null
  import_type?: null
  import_status?: string
  import_error?: null
  open_issues_count?: number
  description_html?: string
  updated_at?: Date
  ci_default_git_depth?: number
  ci_forward_deployment_enabled?: boolean
  ci_forward_deployment_rollback_allowed?: boolean
  ci_job_token_scope_enabled?: boolean
  ci_separated_caches?: boolean
  ci_allow_fork_pipelines_to_run_in_parent_project?: boolean
  build_git_strategy?: string
  keep_latest_artifact?: boolean
  restrict_user_defined_variables?: boolean
  runners_token?: string
  runner_token_expiration_interval?: null
  group_runners_enabled?: boolean
  auto_cancel_pending_pipelines?: string
  build_timeout?: number
  auto_devops_enabled?: boolean
  auto_devops_deploy_strategy?: string
  ci_config_path?: string
  public_jobs?: boolean
  shared_with_groups?: any[]
  only_allow_merge_if_pipeline_succeeds?: boolean
  allow_merge_on_skipped_pipeline?: null
  request_access_enabled?: boolean
  only_allow_merge_if_all_discussions_are_resolved?: boolean
  remove_source_branch_after_merge?: boolean
  printing_merge_request_link_enabled?: boolean
  merge_method?: string
  squash_option?: string
  enforce_auth_checks_on_uploads?: boolean
  suggestion_commit_message?: null
  merge_commit_template?: null
  squash_commit_template?: null
  issue_branch_template?: null
  autoclose_referenced_issues?: boolean
  external_authorization_classification_label?: string
  requirements_enabled?: boolean
  requirements_access_level?: string
  security_and_compliance_enabled?: boolean
  compliance_frameworks?: any[]
  permissions?: {
    project_access?: {
      access_level?: number
      notification_level?: number
    }
    group_access?: {
      access_level?: number
      notification_level?: number
    }
  }
  license?: {
    key?: string
    name?: string
    nickname?: null
    html_url?: null
    source_url?: null
  }
}
