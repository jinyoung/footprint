<template>
    <div>
    <h1>Mold</h1>
        <v-row>
            <v-card
                class="mx-auto"
                style="height:300px; width:300px; margin-bottom:20px; text-align: center;"
                outlined
            >
                <v-list-item>
                    <v-list-item-avatar 
                        class="mx-auto"
                        size="80"
                        style="margin-top:80px;"
                    ><v-icon color="primary" x-large>mdi-plus</v-icon>
                    </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <v-btn 
                        v-on="on"
                        class="mx-auto"
                        outlined
                        rounded
                        @click="openDialog=true;"
                        color="primary"
                        style="font-weight:500; font-size:20px; padding:15px; border:solid 2px; max-width:250px; overflow:hidden"
                    >
                        Mold 등록
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
        <v-list two-line>
            <template>
                <v-list-item v-for="(data, n) in values" :key="n">
                    <v-list-item-avatar color="grey darken-1">
                        <v-img :src="data.photo ? data.photo:'https://cdn.vuetifyjs.com/images/cards/cooking.png'"/>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title style="margin-bottom:10px;">
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                        </v-list-item-title>

                        <v-list-item-subtitle style="font-size:25px; font-weight:700;">
                            [ MoldNo :  {{data.moldNo }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MoldType :  {{data.moldType }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ProdNo :  {{data.prodNo }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ProgNo :  {{data.progNo }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ProgTypeCode :  {{data.progTypeCode }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MoldCode :  {{data.moldCode }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MoldNumber :  {{data.moldNumber }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MoldNm :  {{data.moldNm }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MoldStandard :  {{data.moldStandard }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CurSetMfIdx :  {{data.curSetMfIdx }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ SettingDt :  {{data.settingDt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LifeCycle :  {{data.lifeCycle }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MoldPrice :  {{data.moldPrice }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ FairStock :  {{data.fairStock }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LimitMin :  {{data.limitMin }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CurStock :  {{data.curStock }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ IsManage :  {{data.isManage }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MoldDesign :  {{data.moldDesign }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MoldDesignCode :  {{data.moldDesignCode }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MoldPicture :  {{data.moldPicture }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ KeepPlace :  {{data.keepPlace }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Manage1 :  {{data.manage1 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Manage2 :  {{data.manage2 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RegiNm :  {{data.regiNm }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RegiDt :  {{data.regiDt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ModiNm :  {{data.modiNm }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ModiDt :  {{data.modiDt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CheckStandNum :  {{data.checkStandNum }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </v-list-item-subtitle>

                    </v-list-item-content>
                </v-list-item>

                <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
            </template>
        </v-list>

        <v-col style="margin-bottom:40px;">
            <div class="text-center">
                <v-dialog
                        v-model="openDialog"
                        width="332.5"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                >

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
            }
        },
    };
</script>


<style>
    .video-card {
        width:300px; 
        margin-left:4.5%; 
        margin-top:50px; 
        margin-bottom:50px;
    }
</style>

