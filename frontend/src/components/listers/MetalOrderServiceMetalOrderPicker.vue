<template>
    <div>
        <v-list two-line v-if="list.length > 0">
            <v-list-item-group 
                    v-model="selected" 
                    color="primary"
                    @change="select"
            >
                <v-list-item v-for="(item, idx) in list" :key="idx">
                    <template v-slot:default="{ active }">
                        <v-list-item-avatar color="primary-darker-1">
                        </v-list-item-avatar>
                        
                        <v-list-item-content>
                            <v-list-item-title>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                MorderNo :  {{item.morderNo }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                OrderDt :  {{item.orderDt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                AccountMon :  {{item.accountMon }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Kangjong :  {{item.kangjong }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Kongjung :  {{item.kongjung }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Dia :  {{item.dia }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                McompNo :  {{item.mcompNo }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Price :  {{item.price }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                OrderAmt :  {{item.orderAmt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                OwnCompNo :  {{item.ownCompNo }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                IsEnd :  {{item.isEnd }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Worker :  {{item.worker }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RequestDt :  {{item.requestDt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ConfirmDt :  {{item.confirmDt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Etc :  {{item.etc }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                IsAutoOrder :  {{item.isAutoOrder }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                IsClose :  {{item.isClose }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                CloseNm :  {{item.closeNm }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                CloseTm :  {{item.closeTm }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                IsAdmit :  {{item.isAdmit }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                AdmitNm :  {{item.admitNm }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                AdmitTm :  {{item.admitTm }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RegiNm :  {{item.regiNm }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RegiDt :  {{item.regiDt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ModiNm :  {{item.modiNm }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ModiDt :  {{item.modiDt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                File1 :  {{item.file1 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                File2 :  {{item.file2 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                File3 :  {{item.file3 }}
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-checkbox :input-value="active" color="primary-darker-1"></v-checkbox>
                        </v-list-item-action>
                    </template>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>


<script>
    const axios = require('axios').default;

    export default {
        name: 'MetalOrderServiceMetalOrderPicker',
        props: {
            value: [String, Object, Array, Number, Boolean],
        },
        data: () => ({
            list: [],
            selected: null,
        }),
        async created() {
            var me = this;
            var temp = await axios.get(axios.fixUrl('/metalOrders'))
            if(temp.data) {
                me.list = temp.data._embedded.metalOrders;
            }

            if(me.value && typeof me.value == "object" && Object.values(me.value)[0]) {
                var id = Object.values(me.value)[0];
                var tmpValue = await axios.get(axios.fixUrl('/metalOrders/' + id))
                if(tmpValue.data) {
                    var val = tmpValue.data
                    me.list.forEach(function(item, idx) {
                        if(item.name == val.name) {
                            me.selected = idx
                        }
                    })
                }
            }
        },
        methods: {
            select(val) {
                var obj = {}
                if(val != undefined) {
                    var arr = this.list[val]._links.self.href.split('/');
                    obj['morderNo'] = arr[4]; 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    this.$emit('selected', obj);
                }
            },
        },
    };
</script>

