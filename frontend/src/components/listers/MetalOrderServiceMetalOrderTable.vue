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
            headers: 
                [
                    { text: "morderNo", value: "morderNo" },
                    { text: "orderDt", value: "orderDt" },
                    { text: "accountMon", value: "accountMon" },
                    { text: "kangjong", value: "kangjong" },
                    { text: "kongjung", value: "kongjung" },
                    { text: "dia", value: "dia" },
                    { text: "mcompNo", value: "mcompNo" },
                    { text: "price", value: "price" },
                    { text: "orderAmt", value: "orderAmt" },
                    { text: "ownCompNo", value: "ownCompNo" },
                    { text: "isEnd", value: "isEnd" },
                    { text: "worker", value: "worker" },
                    { text: "requestDt", value: "requestDt" },
                    { text: "confirmDt", value: "confirmDt" },
                    { text: "etc", value: "etc" },
                    { text: "isAutoOrder", value: "isAutoOrder" },
                    { text: "isClose", value: "isClose" },
                    { text: "closeNm", value: "closeNm" },
                    { text: "closeTm", value: "closeTm" },
                    { text: "isAdmit", value: "isAdmit" },
                    { text: "admitNm", value: "admitNm" },
                    { text: "admitTm", value: "admitTm" },
                    { text: "regiNm", value: "regiNm" },
                    { text: "regiDt", value: "regiDt" },
                    { text: "modiNm", value: "modiNm" },
                    { text: "modiDt", value: "modiDt" },
                    { text: "file1", value: "file1" },
                    { text: "file2", value: "file2" },
                    { text: "file3", value: "file3" },
                ],
            metalOrder : [],
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
            },
        }
    }
</script>

