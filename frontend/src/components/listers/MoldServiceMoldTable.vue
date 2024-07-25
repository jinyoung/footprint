<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="values"
                :items-per-page="5"
                class="elevation-1"
        ></v-data-table>

        <v-col style="margin-bottom:40px;">
            <div class="text-center">
                <v-dialog
                        v-model="openDialog"
                        width="332.5"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-fab-transition>
                            <v-btn
                                    color="primary"
                                    fab
                                    dark
                                    large
                                    style="position:absolute; bottom: 5%; right: 2%; z-index:99"
                                    @click="openDialog=true;"
                            >
                                <v-icon v-bind="attrs" v-on="on">mdi-plus</v-icon>
                            </v-btn>
                        </v-fab-transition>
                    </template>

                    <MoldServiceMold :offline="offline" class="video-card" :isNew="true" :editMode="true" v-model="newValue" @add="append" v-if="tick"/>
                
                    <v-btn
                            style="postition:absolute; top:2%; right:2%"
                            @click="closeDialog()"
                            depressed 
                            icon 
                            absolute
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-dialog>
            </div>
        </v-col>
    </div>
</template>

<script>
    const axios = require('axios').default;
    import MoldServiceMold from './../MoldServiceMold.vue';

    export default {
        name: 'MoldServiceMoldManager',
        components: {
            MoldServiceMold,
        },
        props: {
            offline: Boolean,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            values: [],
            headers: 
                [
                    { text: "moldNo", value: "moldNo" },
                    { text: "moldType", value: "moldType" },
                    { text: "prodNo", value: "prodNo" },
                    { text: "progNo", value: "progNo" },
                    { text: "progTypeCode", value: "progTypeCode" },
                    { text: "moldCode", value: "moldCode" },
                    { text: "moldNumber", value: "moldNumber" },
                    { text: "moldNm", value: "moldNm" },
                    { text: "moldStandard", value: "moldStandard" },
                    { text: "curSetMfIdx", value: "curSetMfIdx" },
                    { text: "settingDt", value: "settingDt" },
                    { text: "lifeCycle", value: "lifeCycle" },
                    { text: "moldPrice", value: "moldPrice" },
                    { text: "fairStock", value: "fairStock" },
                    { text: "limitMin", value: "limitMin" },
                    { text: "curStock", value: "curStock" },
                    { text: "isManage", value: "isManage" },
                    { text: "moldDesign", value: "moldDesign" },
                    { text: "moldDesignCode", value: "moldDesignCode" },
                    { text: "moldPicture", value: "moldPicture" },
                    { text: "keepPlace", value: "keepPlace" },
                    { text: "manage1", value: "manage1" },
                    { text: "manage2", value: "manage2" },
                    { text: "regiNm", value: "regiNm" },
                    { text: "regiDt", value: "regiDt" },
                    { text: "modiNm", value: "modiNm" },
                    { text: "modiDt", value: "modiDt" },
                    { text: "checkStandNum", value: "checkStandNum" },
                ],
            mold : [],
            newValue: {},
            tick : true,
            openDialog : false,
        }),
        async created() {
            if(this.offline){
                if(!this.values) this.values = [];
                return;
            }

            var temp = await axios.get(axios.fixUrl('/molds'))
            temp.data._embedded.molds.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])
            this.values = temp.data._embedded.molds;

            this.newValue = {
                'moldNo': 0,
                'moldType': '',
                'prodNo': 0,
                'progNo': 0,
                'progTypeCode': '',
                'moldCode': '',
                'moldNumber': '',
                'moldNm': '',
                'moldStandard': '',
                'curSetMfIdx': 0,
                'settingDt': 0,
                'lifeCycle': 0,
                'moldPrice': 0,
                'fairStock': 0,
                'limitMin': 0,
                'curStock': 0,
                'isManage': '',
                'moldDesign': '',
                'moldDesignCode': '',
                'moldPicture': '',
                'keepPlace': '',
                'manage1': '',
                'manage2': '',
                'regiNm': '',
                'regiDt': 0,
                'modiNm': '',
                'modiDt': 0,
                'checkStandNum': 0,
            }
        },
        methods: {
            closeDialog(){
                this.openDialog = false
            },
            append(value){
                this.tick = false
                this.newValue = {}
                this.values.push(value)
                
                this.$emit('input', this.values);

                this.$nextTick(function(){
                    this.tick=true
                })
            },
        }
    }
</script>

