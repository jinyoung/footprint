<template>
    <v-card style="width:450px; height:100%;" outlined>
        <template slot="progress">
            <v-progress-linear
                    color="primary-darker-1"
                    height="10"
                    indeterminate
            ></v-progress-linear>
        </template>

        <v-card-title v-if="value._links">
            Mold # {{decode(value._links.self.href.split("/")[value._links.self.href.split("/").length - 1])}}
        </v-card-title >
        <v-card-title v-else>
            Mold
        </v-card-title >        

        <v-card-text>
            <Number v-if="editMode" label="MoldNo" v-model="value.moldNo" :editMode="editMode" :inputUI="''"/>
            <String label="MoldType" v-model="value.moldType" :editMode="editMode" :inputUI="''"/>
            <Number label="ProdNo" v-model="value.prodNo" :editMode="editMode" :inputUI="''"/>
            <Number label="ProgNo" v-model="value.progNo" :editMode="editMode" :inputUI="''"/>
            <String label="ProgTypeCode" v-model="value.progTypeCode" :editMode="editMode" :inputUI="''"/>
            <String label="MoldCode" v-model="value.moldCode" :editMode="editMode" :inputUI="''"/>
            <String label="MoldNumber" v-model="value.moldNumber" :editMode="editMode" :inputUI="''"/>
            <String label="MoldNm" v-model="value.moldNm" :editMode="editMode" :inputUI="''"/>
            <String label="MoldStandard" v-model="value.moldStandard" :editMode="editMode" :inputUI="''"/>
            <Number label="CurSetMfIdx" v-model="value.curSetMfIdx" :editMode="editMode" :inputUI="''"/>
            <Number label="SettingDt" v-model="value.settingDt" :editMode="editMode" :inputUI="''"/>
            <Number label="LifeCycle" v-model="value.lifeCycle" :editMode="editMode" :inputUI="''"/>
            <Number label="MoldPrice" v-model="value.moldPrice" :editMode="editMode" :inputUI="''"/>
            <Number label="FairStock" v-model="value.fairStock" :editMode="editMode" :inputUI="''"/>
            <Number label="LimitMin" v-model="value.limitMin" :editMode="editMode" :inputUI="''"/>
            <Number label="CurStock" v-model="value.curStock" :editMode="editMode" :inputUI="''"/>
            <String label="IsManage" v-model="value.isManage" :editMode="editMode" :inputUI="''"/>
            <String label="MoldDesign" v-model="value.moldDesign" :editMode="editMode" :inputUI="''"/>
            <String label="MoldDesignCode" v-model="value.moldDesignCode" :editMode="editMode" :inputUI="''"/>
            <String label="MoldPicture" v-model="value.moldPicture" :editMode="editMode" :inputUI="''"/>
            <String label="KeepPlace" v-model="value.keepPlace" :editMode="editMode" :inputUI="''"/>
            <String label="Manage1" v-model="value.manage1" :editMode="editMode" :inputUI="''"/>
            <String label="Manage2" v-model="value.manage2" :editMode="editMode" :inputUI="''"/>
            <String label="RegiNm" v-model="value.regiNm" :editMode="editMode" :inputUI="''"/>
            <Number label="RegiDt" v-model="value.regiDt" :editMode="editMode" :inputUI="''"/>
            <String label="ModiNm" v-model="value.modiNm" :editMode="editMode" :inputUI="''"/>
            <Number label="ModiDt" v-model="value.modiDt" :editMode="editMode" :inputUI="''"/>
            <Number label="CheckStandNum" v-model="value.checkStandNum" :editMode="editMode" :inputUI="''"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="edit"
                v-if="!editMode"
            >
                수정
            </v-btn>
            <div v-else>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    InsertMold
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="remove"
                    v-if="!editMode"
                >
                    삭제
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="editMode = false"
                    v-if="editMode && !isNew"
                >
                    취소
                </v-btn>
            </div>
        </v-card-actions>
        <v-card-actions>
            <v-spacer></v-spacer>
        </v-card-actions>

        <v-snackbar
            v-model="snackbar.status"
            :top="true"
            :timeout="snackbar.timeout"
            color="error"
        >
            {{ snackbar.text }}
            <v-btn dark text @click="snackbar.status = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-card>

</template>

<script>
    const axios = require('axios').default;


    export default {
        name: 'MoldServiceMold',
        components:{
        },
        props: {
            value: [Object, String, Number, Boolean, Array],
            editMode: Boolean,
            isNew: Boolean,
            offline: Boolean,
        },
        data: () => ({
            snackbar: {
                status: false,
                timeout: 5000,
                text: '',
            },
        }),
	async created() {
        },
        methods: {
            decode(value) {
                return decodeURIComponent(value);
            },
            selectFile(){
                if(this.editMode == false) {
                    return false;
                }
                var me = this
                var input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.id = "uploadInput";
                
                input.click();
                input.onchange = function (event) {
                    var file = event.target.files[0]
                    var reader = new FileReader();

                    reader.onload = function () {
                        var result = reader.result;
                        me.imageUrl = result;
                        me.value.photo = result;
                        
                    };
                    reader.readAsDataURL( file );
                };
            },
            edit() {
                this.editMode = true;
            },
            async save(){
                try {
                    var temp = null;

                    if(!this.offline) {
                        if(this.isNew) {
                            temp = await axios.post(axios.fixUrl('/molds'), this.value)
                        } else {
                            temp = await axios.put(axios.fixUrl(this.value._links.self.href), this.value)
                        }
                    }

                    if(this.value!=null) {
                        for(var k in temp.data) this.value[k]=temp.data[k];
                    } else {
                        this.value = temp.data;
                    }

                    this.editMode = false;
                    this.$emit('input', this.value);

                    if (this.isNew) {
                        this.$emit('add', this.value);
                    } else {
                        this.$emit('edit', this.value);
                    }

                    location.reload()

                } catch(e) {
                    this.snackbar.status = true
                    if(e.response && e.response.data.message) {
                        this.snackbar.text = e.response.data.message
                    } else {
                        this.snackbar.text = e
                    }
                }
                
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.value._links.self.href))
                    }

                    this.editMode = false;
                    this.isDeleted = true;

                    this.$emit('input', this.value);
                    this.$emit('delete', this.value);

                } catch(e) {
                    this.snackbar.status = true
                    if(e.response && e.response.data.message) {
                        this.snackbar.text = e.response.data.message
                    } else {
                        this.snackbar.text = e
                    }
                }
            },
            change(){
                this.$emit('input', this.value);
            },
        },
    }
</script>

