<template>
    <div>
        <vhead style="min-width: 1300px;">
        </vhead>
        <editor>
        </editor>

    </div>
</template>
<script>
    import vhead from "../Commons/head";
    import editor from "../Commons/editor";

    export default {
        components: {
            vhead,editor,
        },
        data() {
        },
        created() {
            editor.created = function(){
                this.button="发布帖子";
            }
        },
        methods: {},


    }
</script>

<style scoped>
</style>
