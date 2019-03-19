<template>
    <v-footer height="auto">
        <tooltip/>
        <v-container fluid class="pa-0 ma-0">  
            <v-card flat tile class="indigo lighten-1 white--text text-xs-center">
                <v-container class="pa-3">
                    <v-btn v-popover:tooltip="'Project Repo'" round flat class="white--text">
                        <a href="https://www.github.com/jasonyip184/Cheetah" target="_blank">
                            <img alt="GitHub Logo" height="40" width="40" src="../assets/githublogo.svg" />
                        </a>
                    </v-btn>
                    <v-btn v-popover:tooltip="'NUSMods'" round flat class="white--text">
                        <a href="https://www.nusmods.com" target="_blank">
                            <img alt="NUSMods Logo" height="40" width="100" src="../assets/nusmodslogo.svg" />
                        </a>
                    </v-btn>
                    <v-btn v-popover:tooltip="'NUS Timetable Builder'" round flat class="white--text">
                        <a href="https://webrb.nus.edu.sg/ctt/builder.aspx" target="_blank">
                            <img alt="NUS Timetable Builder Logo" height="40" width="80" src="../assets/nuslogo.jpg" />
                        </a>
                    </v-btn>
                    <v-btn v-popover:tooltip="'Write to us!'" round flat class="white--text">
                        <a href="mailto:jasonyip.184@gmail.com">
                            <img alt="Email Logo" height="25" width="40" src="../assets/emaillogo.png" />
                        </a>
                    </v-btn>
                </v-container>
        
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

<style scoped>
div[data-popover="tooltip"] {
  background: #444;
  color: #f9f9f9;

  font-size: 12px;
  line-height: 1.5;
  margin: 5px;
}
</style>