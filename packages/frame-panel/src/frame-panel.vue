<template>
<div v-loading="loading">
    <iframe @load="loading = false" :src="goSrc" frameborder="0" :style="fstyle" width="100%" height="100%" marginwidth="0" marginheight="0"></iframe>
</div>
</template>

<script>
export default {
    name: "FramePanel",
    props: ["src", "fstyle"],
    mounted() {
        this.goSrc = this.src;
    },
    data() {
        return {
            goSrc: "",
            loading: false,
        };
    },
    methods: {
        loadPage() {
            this.goSrc = this.src;
            if ((this.src || "").startsWith("http")) {
                //根据SRC获取刷新时长设置 timeout
                const regexpParam = /\??([\w\d%]+)=([\w\d%]*)&?/g,
                    paramMap = {};
                let ret;
                while ((ret = regexpParam.exec(this.src)) != null) {
                    //ret[1]是参数名，ret[2]是参数值
                    paramMap[ret[1]] = ret[2];
                }
                //如果有刷新需求，则刷新
                if (paramMap["timeout"]) {
                    this.$nextTick(() => {
                        let _time = paramMap["timeout"];
                        _time = isNaN(_time) ? 2000 : parseInt(_time);
                        const _newsrc = this.src.replace("timeout=", "newload=");

                        console.log("need reaload:", _time);
                        setTimeout(() => {
                            this.goSrc = _newsrc;
                        }, _time);
                    });
                }
            }
        },
    },
    watch: {
        src: {
            handler: function () {
                this.loading = true;
                //为了防止路径相同参数不同的请求地址不会重新请求的处理
                this.goSrc = "";
                setTimeout(this.loadPage, 50);
            },
            immediate: true,
        },
    },
};
</script>

<style lang="less" scoped>
div {
    width: 100%;
}
</style>
