<template>
    <v-card outlined>
        <v-card-title>
            InsertMold
        </v-card-title>

        <v-card-text>
            <Number label="MoldNo" v-model="value.moldNo" :editMode="editMode"/>
            <String label="MoldType" v-model="value.moldType" :editMode="editMode"/>
            <Number label="ProdNo" v-model="value.prodNo" :editMode="editMode"/>
            <Number label="ProgNo" v-model="value.progNo" :editMode="editMode"/>
            <String label="ProgTypeCode" v-model="value.progTypeCode" :editMode="editMode"/>
            <String label="MoldCode" v-model="value.moldCode" :editMode="editMode"/>
            <String label="MoldNumber" v-model="value.moldNumber" :editMode="editMode"/>
            <String label="MoldNm" v-model="value.moldNm" :editMode="editMode"/>
            <String label="MoldStandard" v-model="value.moldStandard" :editMode="editMode"/>
            <Number label="CurSetMfIdx" v-model="value.curSetMfIdx" :editMode="editMode"/>
            <Number label="SettingDt" v-model="value.settingDt" :editMode="editMode"/>
            <Number label="LifeCycle" v-model="value.lifeCycle" :editMode="editMode"/>
            <Number label="MoldPrice" v-model="value.moldPrice" :editMode="editMode"/>
            <Number label="FairStock" v-model="value.fairStock" :editMode="editMode"/>
            <Number label="LimitMin" v-model="value.limitMin" :editMode="editMode"/>
            <Number label="CurStock" v-model="value.curStock" :editMode="editMode"/>
            <String label="IsManage" v-model="value.isManage" :editMode="editMode"/>
            <String label="MoldDesign" v-model="value.moldDesign" :editMode="editMode"/>
            <String label="MoldDesignCode" v-model="value.moldDesignCode" :editMode="editMode"/>
            <String label="MoldPicture" v-model="value.moldPicture" :editMode="editMode"/>
            <String label="KeepPlace" v-model="value.keepPlace" :editMode="editMode"/>
            <String label="Manage1" v-model="value.manage1" :editMode="editMode"/>
            <String label="Manage2" v-model="value.manage2" :editMode="editMode"/>
            <String label="RegiNm" v-model="value.regiNm" :editMode="editMode"/>
            <Number label="RegiDt" v-model="value.regiDt" :editMode="editMode"/>
            <String label="ModiNm" v-model="value.modiNm" :editMode="editMode"/>
            <Number label="ModiDt" v-model="value.modiDt" :editMode="editMode"/>
            <Number label="CheckStandNum" v-model="value.checkStandNum" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="insertMold"
            >
                InsertMold
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
        name: 'InsertMoldCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.moldNo = 0;
            this.value.moldType = '';
            this.value.prodNo = 0;
            this.value.progNo = 0;
            this.value.progTypeCode = '';
            this.value.moldCode = '';
            this.value.moldNumber = '';
            this.value.moldNm = '';
            this.value.moldStandard = '';
            this.value.curSetMfIdx = 0;
            this.value.settingDt = 0;
            this.value.lifeCycle = 0;
            this.value.moldPrice = 0;
            this.value.fairStock = 0;
            this.value.limitMin = 0;
            this.value.curStock = 0;
            this.value.isManage = '';
            this.value.moldDesign = '';
            this.value.moldDesignCode = '';
            this.value.moldPicture = '';
            this.value.keepPlace = '';
            this.value.manage1 = '';
            this.value.manage2 = '';
            this.value.regiNm = '';
            this.value.regiDt = 0;
            this.value.modiNm = '';
            this.value.modiDt = 0;
            this.value.checkStandNum = 0;
        },
        watch: {
        },
        methods: {
            insertMold() {
                this.$emit('insertMold', this.value);
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

