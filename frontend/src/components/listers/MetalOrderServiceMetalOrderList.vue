<template>
    <div>
    <h1>MetalOrder</h1>
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
                        MetalOrder 등록
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
                            [ MorderNo :  {{data.morderNo }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ OrderDt :  {{data.orderDt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ AccountMon :  {{data.accountMon }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Kangjong :  {{data.kangjong }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Kongjung :  {{data.kongjung }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Dia :  {{data.dia }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ McompNo :  {{data.mcompNo }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Price :  {{data.price }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ OrderAmt :  {{data.orderAmt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ OwnCompNo :  {{data.ownCompNo }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ IsEnd :  {{data.isEnd }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Worker :  {{data.worker }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RequestDt :  {{data.requestDt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ConfirmDt :  {{data.confirmDt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Etc :  {{data.etc }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ IsAutoOrder :  {{data.isAutoOrder }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ IsClose :  {{data.isClose }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CloseNm :  {{data.closeNm }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CloseTm :  {{data.closeTm }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ IsAdmit :  {{data.isAdmit }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ AdmitNm :  {{data.admitNm }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ AdmitTm :  {{data.admitTm }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RegiNm :  {{data.regiNm }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RegiDt :  {{data.regiDt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ModiNm :  {{data.modiNm }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ModiDt :  {{data.modiDt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ File1 :  {{data.file1 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ File2 :  {{data.file2 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ File3 :  {{data.file3 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

                    <MetalOrderServiceMetalOrder :offline="offline" class="video-card" :isNew="true" :editMode="true" v-model="newValue" @add="append" v-if="tick"/>
                
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
    import MetalOrderServiceMetalOrder from './../MetalOrderServiceMetalOrder.vue';

    export default {
        name: 'MetalOrderServiceMetalOrderManager',
        components: {
            MetalOrderServiceMetalOrder,
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

            var temp = await axios.get(axios.fixUrl('/metalorders'))
            temp.data._embedded.metalorders.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])
            this.values = temp.data._embedded.metalorders;
            
            this.newValue = {
                'morderNo': 0,
                'orderDt': 0,
                'accountMon': '',
                'kangjong': '',
                'kongjung': '',
                'dia': '',
                'mcompNo': 0,
                'price': 0,
                'orderAmt': '',
                'ownCompNo': 0,
                'isEnd': '',
                'worker': '',
                'requestDt': 0,
                'confirmDt': 0,
                'etc': '',
                'isAutoOrder': false,
                'isClose': '',
                'closeNm': '',
                'closeTm': 0,
                'isAdmit': '',
                'admitNm': '',
                'admitTm': 0,
                'regiNm': '',
                'regiDt': 0,
                'modiNm': '',
                'modiDt': 0,
                'file1': '',
                'file2': '',
                'file3': '',
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

