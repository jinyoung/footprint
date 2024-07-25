<template>
    <v-card outlined>
        <v-card-title>
            MetalOrder # {{item._links.self.href.split("/")[item._links.self.href.split("/").length - 1]}}
        </v-card-title>

        <v-card-text>
            <div>
                <Number label="MorderNo" v-model="item.morderNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="OrderDt" v-model="item.orderDt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="AccountMon" v-model="item.accountMon" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Kangjong" v-model="item.kangjong" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Kongjung" v-model="item.kongjung" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Dia" v-model="item.dia" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="McompNo" v-model="item.mcompNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Price" v-model="item.price" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="OrderAmt" v-model="item.orderAmt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="OwnCompNo" v-model="item.ownCompNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="IsEnd" v-model="item.isEnd" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Worker" v-model="item.worker" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="RequestDt" v-model="item.requestDt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="ConfirmDt" v-model="item.confirmDt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Etc" v-model="item.etc" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Boolean label="IsAutoOrder" v-model="item.isAutoOrder" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="IsClose" v-model="item.isClose" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="CloseNm" v-model="item.closeNm" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="CloseTm" v-model="item.closeTm" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="IsAdmit" v-model="item.isAdmit" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="AdmitNm" v-model="item.admitNm" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="AdmitTm" v-model="item.admitTm" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="RegiNm" v-model="item.regiNm" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="RegiDt" v-model="item.regiDt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="ModiNm" v-model="item.modiNm" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="ModiDt" v-model="item.modiDt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="File1" v-model="item.file1" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="File2" v-model="item.file2" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="File3" v-model="item.file3" :editMode="editMode" @change="change" />
            </div>
        </v-card-text>

        <v-card-actions>
            <v-btn text color="deep-purple lighten-2" large @click="goList">List</v-btn>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="edit"
                    v-if="!editMode"
            >
                Edit
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="save"
                    v-else
            >
                Save
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="remove"
                    v-if="!editMode"
            >
                Delete
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="editMode = false"
                    v-if="editMode"
            >
                Cancel
            </v-btn>
        </v-card-actions>
    </v-card>
</template>


<script>
    const axios = require('axios').default;

    export default {
        name: 'MetalOrderServiceMetalOrderDetail',
        components:{},
        props: {
        },
        data: () => ({
            item: null,
            editMode: false,
        }),
        async created() {
            var me = this;
            var params = this.$route.params;
            var temp = await axios.get(axios.fixUrl('/metalOrders/' + params.id))
            if(temp.data) {
                me.item = temp.data
            }
        },
        methods: {
            goList() {
                var path = window.location.href.slice(window.location.href.indexOf("/#/"), window.location.href.lastIndexOf("/#"));
                path = path.replace("/#/", "/");
                this.$router.push(path);
            },
            edit() {
                this.editMode = true;
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.item._links.self.href))
                    }

                    this.editMode = false;

                    this.$emit('input', this.item);
                    this.$emit('delete', this.item);

                } catch(e) {
                    console.log(e)
                }
            },
        },
    };
</script>
