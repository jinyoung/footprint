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
            MetalOrder # {{decode(value._links.self.href.split("/")[value._links.self.href.split("/").length - 1])}}
        </v-card-title >
        <v-card-title v-else>
            MetalOrder
        </v-card-title >        

        <v-card-text>
            <Number v-if="editMode" label="MorderNo" v-model="value.morderNo" :editMode="editMode" :inputUI="''"/>
            <Number label="OrderDt" v-model="value.orderDt" :editMode="editMode" :inputUI="''"/>
            <String label="AccountMon" v-model="value.accountMon" :editMode="editMode" :inputUI="''"/>
            <String label="Kangjong" v-model="value.kangjong" :editMode="editMode" :inputUI="''"/>
            <String label="Kongjung" v-model="value.kongjung" :editMode="editMode" :inputUI="''"/>
            <String label="Dia" v-model="value.dia" :editMode="editMode" :inputUI="''"/>
            <Number label="McompNo" v-model="value.mcompNo" :editMode="editMode" :inputUI="''"/>
            <Number label="Price" v-model="value.price" :editMode="editMode" :inputUI="''"/>
            <String label="OrderAmt" v-model="value.orderAmt" :editMode="editMode" :inputUI="''"/>
            <Number label="OwnCompNo" v-model="value.ownCompNo" :editMode="editMode" :inputUI="''"/>
            <String label="IsEnd" v-model="value.isEnd" :editMode="editMode" :inputUI="''"/>
            <String label="Worker" v-model="value.worker" :editMode="editMode" :inputUI="''"/>
            <Number label="RequestDt" v-model="value.requestDt" :editMode="editMode" :inputUI="''"/>
            <Number label="ConfirmDt" v-model="value.confirmDt" :editMode="editMode" :inputUI="''"/>
            <String label="Etc" v-model="value.etc" :editMode="editMode" :inputUI="''"/>
            <Boolean label="IsAutoOrder" v-model="value.isAutoOrder" :editMode="editMode" :inputUI="''"/>
            <String label="IsClose" v-model="value.isClose" :editMode="editMode" :inputUI="''"/>
            <String label="CloseNm" v-model="value.closeNm" :editMode="editMode" :inputUI="''"/>
            <Number label="CloseTm" v-model="value.closeTm" :editMode="editMode" :inputUI="''"/>
            <String label="IsAdmit" v-model="value.isAdmit" :editMode="editMode" :inputUI="''"/>
            <String label="AdmitNm" v-model="value.admitNm" :editMode="editMode" :inputUI="''"/>
            <Number label="AdmitTm" v-model="value.admitTm" :editMode="editMode" :inputUI="''"/>
            <String label="RegiNm" v-model="value.regiNm" :editMode="editMode" :inputUI="''"/>
            <Number label="RegiDt" v-model="value.regiDt" :editMode="editMode" :inputUI="''"/>
            <String label="ModiNm" v-model="value.modiNm" :editMode="editMode" :inputUI="''"/>
            <Number label="ModiDt" v-model="value.modiDt" :editMode="editMode" :inputUI="''"/>
            <String label="File1" v-model="value.file1" :editMode="editMode" :inputUI="''"/>
            <String label="File2" v-model="value.file2" :editMode="editMode" :inputUI="''"/>
            <String label="File3" v-model="value.file3" :editMode="editMode" :inputUI="''"/>
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
                    CreateMetalOrder
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
        name: 'MetalOrderServiceMetalOrder',
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
                            temp = await axios.post(axios.fixUrl('/metalOrders'), this.value)
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

