<template>
    <v-card outlined>
        <v-card-title>
            CreateMetalOrder
        </v-card-title>

        <v-card-text>
            <Number label="MorderNo" v-model="value.morderNo" :editMode="editMode"/>
            <Number label="OrderDt" v-model="value.orderDt" :editMode="editMode"/>
            <String label="AccountMon" v-model="value.accountMon" :editMode="editMode"/>
            <String label="Kangjong" v-model="value.kangjong" :editMode="editMode"/>
            <String label="Kongjung" v-model="value.kongjung" :editMode="editMode"/>
            <String label="Dia" v-model="value.dia" :editMode="editMode"/>
            <Number label="McompNo" v-model="value.mcompNo" :editMode="editMode"/>
            <Number label="Price" v-model="value.price" :editMode="editMode"/>
            <String label="OrderAmt" v-model="value.orderAmt" :editMode="editMode"/>
            <Number label="OwnCompNo" v-model="value.ownCompNo" :editMode="editMode"/>
            <String label="IsEnd" v-model="value.isEnd" :editMode="editMode"/>
            <String label="Worker" v-model="value.worker" :editMode="editMode"/>
            <Number label="RequestDt" v-model="value.requestDt" :editMode="editMode"/>
            <Number label="ConfirmDt" v-model="value.confirmDt" :editMode="editMode"/>
            <String label="Etc" v-model="value.etc" :editMode="editMode"/>
            <Boolean label="IsAutoOrder" v-model="value.isAutoOrder" :editMode="editMode"/>
            <String label="IsClose" v-model="value.isClose" :editMode="editMode"/>
            <String label="CloseNm" v-model="value.closeNm" :editMode="editMode"/>
            <Number label="CloseTm" v-model="value.closeTm" :editMode="editMode"/>
            <String label="IsAdmit" v-model="value.isAdmit" :editMode="editMode"/>
            <String label="AdmitNm" v-model="value.admitNm" :editMode="editMode"/>
            <Number label="AdmitTm" v-model="value.admitTm" :editMode="editMode"/>
            <String label="RegiNm" v-model="value.regiNm" :editMode="editMode"/>
            <Number label="RegiDt" v-model="value.regiDt" :editMode="editMode"/>
            <String label="ModiNm" v-model="value.modiNm" :editMode="editMode"/>
            <Number label="ModiDt" v-model="value.modiDt" :editMode="editMode"/>
            <String label="File1" v-model="value.file1" :editMode="editMode"/>
            <String label="File2" v-model="value.file2" :editMode="editMode"/>
            <String label="File3" v-model="value.file3" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="createMetalOrder"
            >
                CreateMetalOrder
            </v-btn>
            
            <v-btn
                    color="primary"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
   
    export default {
        name: 'CreateMetalOrderCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.morderNo = 0;
            this.value.orderDt = 0;
            this.value.accountMon = '';
            this.value.kangjong = '';
            this.value.kongjung = '';
            this.value.dia = '';
            this.value.mcompNo = 0;
            this.value.price = 0;
            this.value.orderAmt = '';
            this.value.ownCompNo = 0;
            this.value.isEnd = '';
            this.value.worker = '';
            this.value.requestDt = 0;
            this.value.confirmDt = 0;
            this.value.etc = '';
            this.value.isAutoOrder = false;
            this.value.isClose = '';
            this.value.closeNm = '';
            this.value.closeTm = 0;
            this.value.isAdmit = '';
            this.value.admitNm = '';
            this.value.admitTm = 0;
            this.value.regiNm = '';
            this.value.regiDt = 0;
            this.value.modiNm = '';
            this.value.modiDt = 0;
            this.value.file1 = '';
            this.value.file2 = '';
            this.value.file3 = '';
        },
        watch: {
        },
        methods: {
            createMetalOrder() {
                this.$emit('createMetalOrder', this.value);
            },
            close() {
                this.$emit('closeDialog');
            },
            change() {
                this.$emit('input', this.value);
            },
        }
    }
</script>

