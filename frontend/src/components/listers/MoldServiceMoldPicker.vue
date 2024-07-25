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
                                MoldNo :  {{item.moldNo }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MoldType :  {{item.moldType }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ProdNo :  {{item.prodNo }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ProgNo :  {{item.progNo }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ProgTypeCode :  {{item.progTypeCode }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MoldCode :  {{item.moldCode }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MoldNumber :  {{item.moldNumber }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MoldNm :  {{item.moldNm }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MoldStandard :  {{item.moldStandard }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                CurSetMfIdx :  {{item.curSetMfIdx }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                SettingDt :  {{item.settingDt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                LifeCycle :  {{item.lifeCycle }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MoldPrice :  {{item.moldPrice }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                FairStock :  {{item.fairStock }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                LimitMin :  {{item.limitMin }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                CurStock :  {{item.curStock }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                IsManage :  {{item.isManage }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MoldDesign :  {{item.moldDesign }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MoldDesignCode :  {{item.moldDesignCode }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MoldPicture :  {{item.moldPicture }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                KeepPlace :  {{item.keepPlace }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Manage1 :  {{item.manage1 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Manage2 :  {{item.manage2 }}
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
                                CheckStandNum :  {{item.checkStandNum }}
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
        name: 'MoldServiceMoldPicker',
        props: {
            value: [String, Object, Array, Number, Boolean],
        },
        data: () => ({
            list: [],
            selected: null,
        }),
        async created() {
            var me = this;
            var temp = await axios.get(axios.fixUrl('/molds'))
            if(temp.data) {
                me.list = temp.data._embedded.molds;
            }

            if(me.value && typeof me.value == "object" && Object.values(me.value)[0]) {
                var id = Object.values(me.value)[0];
                var tmpValue = await axios.get(axios.fixUrl('/molds/' + id))
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
                    obj['moldNo'] = arr[4]; 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    this.$emit('selected', obj);
                }
            },
        },
    };
</script>

