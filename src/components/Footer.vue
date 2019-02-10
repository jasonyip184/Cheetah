<template>
    <v-footer height="auto">
        <v-container fluid  class="pa-0 ma-0">  
            <v-card flat tile class="indigo lighten-1 white--text text-xs-center">
                <v-card-text>
                        <v-btn large flat class="mx-3 white--text">
                            <a href="//https://github.com/jasonyip184/Cheetah">
                                <img alt="GitHub logo" height="40" width="40" src="../assets/githublogo.svg" />
                            </a>
                        </v-btn>
                        <v-btn large flat class="mx-3 white--text">
                            <a href="//www.nusmods.com">
                                <img alt="NUSMods logo" height="50" width="100" src="../assets/nusmodslogo.svg" />
                            </a>
                        </v-btn>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                    NUS Module Demographics is a web application designed to be complementary to existing module planners such as NUSMods and NUSTimetable Builder.                                          
                </v-card-text>
                

                <v-divider></v-divider>

                <v-card-text class="white--text pt-0">
                    &copy;2019 — <strong>Developed by Team Cheetah</strong>
                    <br />
                    <p>BT3103 Y18/19 Sem 2 </p>
                </v-card-text>
            </v-card>
        </v-container>
    </v-footer>
</template>



<script>
    export default {
        data: () => ({
        }),
        name: "footer",
    };
</script>