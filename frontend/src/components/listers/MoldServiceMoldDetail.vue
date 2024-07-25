<template>
    <v-card outlined>
        <v-card-title>
            Mold # {{item._links.self.href.split("/")[item._links.self.href.split("/").length - 1]}}
        </v-card-title>

        <v-card-text>
            <div>
                <Number label="MoldNo" v-model="item.moldNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="MoldType" v-model="item.moldType" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="ProdNo" v-model="item.prodNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="ProgNo" v-model="item.progNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="ProgTypeCode" v-model="item.progTypeCode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="MoldCode" v-model="item.moldCode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="MoldNumber" v-model="item.moldNumber" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="MoldNm" v-model="item.moldNm" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="MoldStandard" v-model="item.moldStandard" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="CurSetMfIdx" v-model="item.curSetMfIdx" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="SettingDt" v-model="item.settingDt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="LifeCycle" v-model="item.lifeCycle" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="MoldPrice" v-model="item.moldPrice" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="FairStock" v-model="item.fairStock" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="LimitMin" v-model="item.limitMin" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="CurStock" v-model="item.curStock" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="IsManage" v-model="item.isManage" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="MoldDesign" v-model="item.moldDesign" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="MoldDesignCode" v-model="item.moldDesignCode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="MoldPicture" v-model="item.moldPicture" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="KeepPlace" v-model="item.keepPlace" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Manage1" v-model="item.manage1" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Manage2" v-model="item.manage2" :editMode="editMode" @change="change" />
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
                <Number label="CheckStandNum" v-model="item.checkStandNum" :editMode="editMode" @change="change" />
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
        name: 'MoldServiceMoldDetail',
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
            var temp = await axios.get(axios.fixUrl('/molds/' + params.id))
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
