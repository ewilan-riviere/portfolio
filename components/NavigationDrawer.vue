<template>
    <v-sheet class="navigation-drawer-container">
        <v-container class="navigation-drawer-toggle">
            <v-row
                align="center"
                justify="start"
            >
                <div
                    class="hamburger  hamburger--collapse"
                    @click="hamburgerActivate()"
                    @click.stop="drawer = !drawer"
                    :class="drawer ? 'is-active' : ''"
                >
                    <div class="hamburger-background"></div>
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </div>
            </v-row>
        </v-container>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="images/logos/ewilan-photo.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        {{ name }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>

                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    class="black-text"
                >
                    <v-list-item-icon>
                        <v-icon>mdi-{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-sheet>
</template>

<script>
export default {
    methods: {
        hamburgerActivate() {
            if (this.hamburgerActive==true) {
                this.hamburgerActive=false
            } else {
                this.hamburgerActive=true
            }
        }
    },
    data () {
        return {
            hamburgerActive: false,
            drawer: false,
            name: "Ewilan Rivière",
            items: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'question_answer' },
            ],
        }
    },
}
</script>

<style lang="scss">
.navigation-drawer-container {
    background-color: transparent !important;
    .navigation-drawer-toggle {
        position: absolute;
    }
    .v-navigation-drawer__content {
        // margin-top: 4rem;
    }
    
    .hamburger {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 10;
        transition: all 3s;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 1s ease;
        .hamburger-background {
            background-color: $gray;
            position: absolute;
            height: 4rem;
            width: 4rem;
            top: -0.2rem;
            left: 0.2rem;
            border-radius: 2rem;
        }
    }
    .is-active {
        top: 0;
        left: 11.5rem;
        .hamburger-background {
            background-color: transparent;
        }
    }
}
</style>