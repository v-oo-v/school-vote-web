<template>
  <div class="home">
    <van-row class="center" v-show="showFill">
      <van-col span="22" class="topName">
        <van-field v-model="name" :readonly="type == 'primary' ? true : false" label="同学，你叫：" />
        <!-- <van-field v-model="name" label="同学，你叫：" /> -->
      </van-col>
      <van-col v-if="type == 'primary'&&personDetail.length" span="22" class="topName">
        <van-field v-model="password" label="输入密匙：" />
      </van-col>
      <van-col v-if="type == 'primary'" span="22">
        <van-button :type="type" :loading="loadingEnter" round block @click="enter" size="small">进入</van-button>
      </van-col>
    </van-row>
    <div v-show="!showFill">
      <van-row class="container">
        <van-col span="24">
          <h4>你觉得十年聚会有必要吗？</h4>
          <van-radio-group v-model="questions.ans1">
            <van-cell-group>
              <van-cell>
                <van-radio name="1">有</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="2">没有</van-radio>
              </van-cell>
            </van-cell-group>
            <canvas id="myChart1" min-width="100" min-height="100"></canvas>
          </van-radio-group>
        </van-col>
        <van-col span="24">
          <h4>你想参加聚会吗？</h4>
          <van-radio-group v-model="questions.ans2">
            <van-cell-group>
              <van-cell>
                <van-radio name="1">想</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="2">不想</van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <canvas id="myChart2" min-width="100" min-height="100"></canvas>
        </van-col>
        <van-col span="24">
          <h4>你觉得哪些时间段举行合适？</h4>
          <van-radio-group v-model="questions.ans3">
            <van-cell-group>
              <van-cell>
                <van-radio name="1">正月初三</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="2">正月初四</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="3">正月初五</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="4">正月初六</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="5">正月初七</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="6">五一</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="7">国庆</van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <canvas id="myChart3" min-width="100" min-height="100"></canvas>
        </van-col>
        <van-col span="24">
          <h4>你觉得活动以什么形式举行？</h4>
          <van-radio-group v-model="questions.ans4">
            <van-cell-group>
              <van-cell>
                <van-radio name="1">吃吃喝喝</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="2">创意聚会(无人策划)</van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <canvas id="myChart4" min-width="100" min-height="100"></canvas>
        </van-col>
        <van-col span="24">
          <h4>你觉得活动地点设在哪里合适？</h4>
          <van-radio-group v-model="questions.ans5">
            <van-cell-group>
              <van-cell>
                <van-radio name="1">班级内(可能性不大，需要后门)</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="2">学校附近</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="3">六安市内</van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <canvas id="myChart5" min-width="100" min-height="100"></canvas>
        </van-col>
        <van-col span="24">
          <h4>如果可能，你最想哪个老师能到场？</h4>
          <van-radio-group v-model="questions.ans6">
            <van-cell-group>
              <van-cell>
                <van-radio name="1">金斌老师(数学)</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="2">王田老师(语文)</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="3">徐俊生老师(英语)</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="4">没有老师</van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <canvas id="myChart6" min-width="100" min-height="100"></canvas>
        </van-col>
        <van-col span="24">
          <h4>你觉得活动带家属怎么样？</h4>
          <van-radio-group v-model="questions.ans7">
            <van-cell-group>
              <van-cell>
                <van-radio name="1">我觉得可以</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="2">我不同意</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="3">我无所谓</van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <canvas id="myChart7" min-width="100" min-height="100"></canvas>
        </van-col>
        <van-col span="24">
          <h4>你觉得活动经费每个人出多少合适？</h4>
          <van-radio-group v-model="questions.ans8">
            <van-cell-group>
              <van-cell>
                <van-radio name="1">500</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="2">300</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="3">200</van-radio>
              </van-cell>
              <van-cell>
                <van-radio name="4">100</van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <canvas id="myChart8" min-width="100" min-height="100"></canvas>
        </van-col>
        <van-col span="24">
          <h4>写下当天能做且有纪念意义的事</h4>
          <van-field
            v-model="questions.message"
            rows="2"
            autosize
            label
            type="textarea"
            maxlength="100"
            :readonly="!edit"
            placeholder="就，随便写写，或者点个赞"
            show-word-limit
          />
          <template v-for="(item,i) in answers.message">
            <van-cell v-if="item.title" :key="i" :title="`${item.title}`">
              <template #right-icon>
                <div class="lineLeft">
                  <van-icon name="like" :color="item.status ? 'red':'' " @click="like(item)" />
                  <span>{{item.num}}</span>
                </div>
              </template>
            </van-cell>
          </template>
        </van-col>
        <!-- <van-col span="24">
          <h4>关于创意活动中每个人演说话题的想法</h4>
          <van-field
            v-model="questions.idea"
            rows="2"
            autosize
            :readonly="!edit"
            label
            type="textarea"
            maxlength="30"
            placeholder="给我，想！写完就不给改了 *_*"
            show-word-limit
          />
          <van-cell v-for="(item,i) in answers.idea" :key="i" :title="`${item.title}`">
            <template #right-icon>
              <div class="lineLeft">
                <van-icon name="like" :color="item.status ? 'red':'' " @click="likeIdea(item)" />
                <span>{{item.num}}</span>
              </div>
            </template>
          </van-cell>
        </van-col> -->
      </van-row>
      <div class="submit">
        <div class="cont">
          <van-button
            v-if="submitStatus"
            type="primary"
            :loading="loading"
            block
            @click="onSubmit"
            size="normal"
          >提交</van-button>
          <van-button v-else type="normal" :loading="loading" plain block size="normal">提交</van-button>
          <van-dialog
            v-model="showDialog"
            title="输入密匙,下次进入时使用"
            show-cancel-button
            @confirm="confirmDialog"
          >
            <van-field type="digit" maxlength="4" v-model="questions.password" placeholder="数字,4位" />
          </van-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "../assets/debounce";
import { studentnNames } from "./need";
export default {
    name: "Home",
    components: {},
    data() {
        return {
            edit: false,
            name: "",
            cellClickable: true,
            password: "",
            studentName: studentnNames,
            canLogin: false,
            type: "default",
            loading: false,
            loadingEnter: false,
            showFill: true,
            showDialog: false,
            personDetail: [],
            questions: {
                ans1: "",
                ans2: "",
                ans3: "",
                ans4: "",
                ans5: "",
                ans6: "",
                ans7: "",
                ans8: "",
                message: "",
                idea: "",
                password: "",
            },
            obj1: [
                { genre: "有", sold: 0 },
                { genre: "没有", sold: 0 },
            ],
            obj2: [
                { genre: "想", sold: 0 },
                { genre: "不想", sold: 0 },
            ],
            obj3: [
                { genre: "初三", sold: 0 },
                { genre: "初四", sold: 0 },
                { genre: "初五", sold: 0 },
                { genre: "初六", sold: 0 },
                { genre: "初七", sold: 0 },
                { genre: "五一", sold: 0 },
                { genre: "国庆", sold: 0 },
            ],
            obj4: [
                { genre: "吃吃喝喝", sold: 0 },
                { genre: "创意聚会", sold: 0 },
            ],
            obj5: [
                { genre: "班级", sold: 0 },
                { genre: "学校附近", sold: 0 },
                { genre: "六安市内", sold: 0 },
            ],
            obj6: [
                { genre: "金斌老师(数学)", sold: 0 },
                { genre: "王田老师(语文)", sold: 0 },
                { genre: "徐俊生老师(英语)", sold: 0 },
                { genre: "没有老师", sold: 0 },
            ],
            obj7: [
                { genre: "我觉得可以", sold: 0 },
                { genre: "我不同意", sold: 0 },
                { genre: "我无所谓", sold: 0 },
            ],
            obj8: [
                { genre: "500", sold: 0 },
                { genre: "300", sold: 0 },
                { genre: "200", sold: 0 },
                { genre: "100", sold: 0 },
            ],
            answers: {
                message: [],
                idea: [],
            },
            submitStatus: false,
        };
    },
    mounted() {
        if (this.$cookies.get("name")) {
            this.name = this.$cookies.get("name");
        }
        this.getPerson();
    },
    watch: {
        name(val) {
            let _this = this;
            _this.type = "default";
            debounce(() => {
                _this.studentName.forEach((item) => {
                    if (val === item) {
                        _this.type = "primary";
                    }
                });
            }, 500);
        },
        type(val) {
            if (val == "primary") {
                let url = `${this.baseUrl}/personDetail`;
                this.$axios.get(url, { params: this.name }).then((res) => {
                    if (res.data.list.length) {
                        this.personDetail = res.data.list;
                    }
                });
            }
        },
        questions: {
            deep: true,
            handler(val,) {
                let arr = Object.values(val);
                if (arr.length > 7) {
                  this.submitStatus = true;
                } else {
                  this.submitStatus = false;
                }
            }
        },
        obj1: {
            deep: true,
            handler(val) {
                if (!this.showFill) {
                    this.drawChart(val, "myChart1");
                }
            },
        },
        obj2: {
            deep: true,
            handler(val) {
                if (!this.showFill) {
                    this.drawChart(val, "myChart2");
                }
            },
        },
        obj3: {
            deep: true,
            handler(val) {
                if (!this.showFill) {
                    this.drawChart(val, "myChart3");
                }
            },
        },
        obj4: {
            deep: true,
            handler(val) {
                if (!this.showFill) {
                    this.drawChart(val, "myChart4");
                }
            },
        },
        obj5: {
            deep: true,
            handler(val) {
                if (!this.showFill) {
                    this.drawChart(val, "myChart5");
                }
            },
        },
        obj6: {
            deep: true,
            handler(val) {
                if (!this.showFill) {
                    this.drawChart(val, "myChart6");
                }
            },
        },
        obj7: {
            deep: true,
            handler(val) {
                if (!this.showFill) {
                    this.drawChart(val, "myChart7");
                }
            },
        },
        obj8: {
            deep: true,
            handler(val) {
                if (!this.showFill) {
                    this.drawChart(val, "myChart8");
                }
            },
        },
    },
    methods: {
        click_ans1(name) {
            console.log(name.target);
        },
        enter() {
            if(this.personDetail.length){
                if(this.password == this.personDetail[0].password){
                    this.enterAction()
                }else{
                    this.$toast.fail("小垃圾,密码不对");
                }
            }else{
                this.enterAction()
            }
        },
        enterAction(){
            this.loadingEnter = true;
            if (this.canLogin) {
                this.showFill = false;
                this.$cookies.set("name", this.name, "60d");
                this.$nextTick(async () => {
                    await this.getSinglePerson();
                    await this.getPersonLikes(this.name);
                    await this.getPersonIdaeLikes(this.name);
                    await this.init();
                    this.loadingEnter = false;
                });
            } else {
                this.$toast.fail("这是个bug");
            }
        },
        like(item) {
            let params = {
                name: this.$cookies.get("name"),
                ...item,
            };
            this.$axios
                .post(`${this.baseUrl}/loveThings`, params)
                .then((res) => {
                    if (res.data.status == "success") {
                        item.status = !item.status;
                        this.getAllLikes();
                    }
                });
        },
        likeIdea(item) {
            let params = {
                name: this.$cookies.get("name"),
                ...item,
            };
            this.$axios.post(`${this.baseUrl}/loveIdea`, params).then((res) => {
                if (res.data.status == "success") {
                    item.status = !item.status;
                    this.getAllIdeaLikes();
                }
            });
        },
        //个人message收藏状态
        getPersonLikes(name) {
            this.$axios
                .get(`${this.baseUrl}/getLikes`, { params: name })
                .then((res) => {
                    if (res.data.status == "success") {
                        let res_data = res.data.list;
                        let ans_data = this.answers.message;
                        ans_data.map((item) => {
                            res_data.map((item1) => {
                                if (item.id == item1.q_id) {
                                    let obj = {
                                        status: item1.status == 1 ? 1 : 0,
                                    };
                                    Object.assign(item, obj);
                                    return item;
                                }
                            });
                        });
                    }
                });
        },
        //个人idea收藏状态
        getPersonIdaeLikes(name) {
            this.$axios
                .get(`${this.baseUrl}/getIdeaLikes`, { params: name })
                .then((res) => {
                    if (res.data.status == "success") {
                        let res_data = res.data.list;
                        let ans_data = this.answers.idea;
                        ans_data.map((item) => {
                            res_data.map((item1) => {
                                if (item.id == item1.q_id) {
                                    let obj = {
                                        status:
                                            item1.status == 1 ? true : false,
                                    };
                                    Object.assign(item, obj);
                                    return item;
                                }
                            });
                        });
                    }
                });
        },
        //统计相同元素
        countMessageStar(arr) {
            return arr.reduce((obj, name) => {
                if (name in obj) {
                    obj[name]++;
                } else {
                    obj[name] = 1;
                }
                return obj;
            }, {});
        },
        getAllLikes() {
            this.$axios.get(`${this.baseUrl}/getAllLikes`).then((res) => {
                if (res.data.status == "success") {
                    let arr = [];
                    res.data.list.forEach((item) => {
                        arr.push(item.q_id);
                    });
                    const result = this.countMessageStar(arr);
                    for (var key in result) {
                        this.answers.message.map((item) => {
                            if (key == item.id) {
                                item.num = result[key];
                            }
                        });
                    }
                }
            });
        },
        getAllIdeaLikes() {
            this.$axios.get(`${this.baseUrl}/getAllIdeaLikes`).then((res) => {
                if (res.data.status == "success") {
                    let arr = [];
                    res.data.list.forEach((item) => {
                        arr.push(item.q_id);
                    });
                    const result = this.countMessageStar(arr);
                    for (var key in result) {
                        this.answers.idea.map((item) => {
                            if (key == item.id) {
                                item.num = result[key];
                            }
                        });
                    }
                }
            });
        },
        getPerson() {
            this.$axios.post(`${this.baseUrl}/detail`).then((res) => {
                if (res.data.status == "success") {
                    this.canLogin = true;

                    let a1 = [];
                    let a2 = [];
                    let a3 = [];
                    let a4 = [];
                    let a5 = [];
                    let a6 = [];
                    let a7 = [];
                    let a8 = [];
                    let message = [];
                    let idea = [];

                    res.data.list.forEach((item) => {
                        a1.push(item.ans1);
                        a2.push(item.ans2);
                        a3.push(item.ans3);
                        a4.push(item.ans4);
                        a5.push(item.ans5);
                        a6.push(item.ans6);
                        a7.push(item.ans7);
                        a8.push(item.ans8);
                        message.push({
                            id: item.id,
                            title: item.message,
                            status: false,
                            num: 0,
                        });
                        idea.push({
                            id: item.id,
                            title: item.idea,
                            status: false,
                            num: 0,
                        });
                    });

                    let res1 = this.countTimes(a1);
                    let res2 = this.countTimes(a2);
                    let res3 = this.countTimes(a3);
                    let res4 = this.countTimes(a4);
                    let res5 = this.countTimes(a5);
                    let res6 = this.countTimes(a6);
                    let res7 = this.countTimes(a7);
                    let res8 = this.countTimes(a8);

                    this.fillObj(this.obj1, res1);
                    this.fillObj(this.obj2, res2);
                    this.fillObj(this.obj3, res3);
                    this.fillObj(this.obj4, res4);
                    this.fillObj(this.obj5, res5);
                    this.fillObj(this.obj6, res6);
                    this.fillObj(this.obj7, res7);
                    this.fillObj(this.obj8, res8);

                    this.answers.message = message;
                    this.answers.idea = idea;

                    this.getAllLikes(this.name);
                    this.getAllIdeaLikes(this.name);
                }
            });
        },
        fillObj(obj, res) {
            obj.forEach((item, i) => {
                if (res[i + 1]) {
                    item.sold = res[i + 1];
                } else {
                    item.sold = 0;
                }
            });
            // for (var key in res) {
            //     obj[key - 1].sold = res[key];
            // }
        },
        countTimes(arr) {
            return arr.reduce((allNames, name) => {
                if (name in allNames) {
                    allNames[name]++;
                } else {
                    allNames[name] = 1;
                }
                return allNames;
            }, {});
        },
        confirmDialog() {
            if (this.questions.password) {
                this.submitAction()
            }
        },
        submitAction(){
            let _this = this;
            this.questions.name = this.$cookies.get("name");
            let url = `${this.baseUrl}/submit`;
            this.$axios
                .post(url, { params: this.questions })
                .then(async (res) => {
                    if (res.data.status == "success") {
                        this.$toast.success(res.data.msg);
                    } else {
                        this.$toast.fail(res.data.msg);
                    }
                    this.submitStatus = false;
                    this.showDialog = false
                    this.$nextTick(async () => {
                        this.getPerson();
                        this.getPersonLikes(this.name);
                        this.getPersonIdaeLikes(this.name);
                    });
                });
        },
        onSubmit() {
            if(this.personDetail.length){
                this.submitAction()
            }else{
                this.showDialog = true;
            }
        },
        getSinglePerson() {
            let name = this.$cookies.get("name");
            let url = `${this.baseUrl}/personDetail`;
            this.$axios.get(url, { params: name }).then((res) => {
                if (res.data.status == "success") {
                    this.questions = { ...res.data.list[0] };
                    if (res.data.list.length == 0) {
                        this.edit = true;
                    }
                }
            });
        },
        init() {
            const name = this.$cookies.get("name");
            this.drawChart(this.obj1, "myChart1");
            this.drawChart(this.obj2, "myChart2");
            this.drawChart(this.obj3, "myChart3");
            this.drawChart(this.obj4, "myChart4");
            this.drawChart(this.obj5, "myChart5");
            this.drawChart(this.obj6, "myChart6");
            this.drawChart(this.obj7, "myChart7");
            this.drawChart(this.obj8, "myChart8");
        },
        drawChart(obj, name) {
            // F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
            const data = obj;

            // Step 1: 创建 Chart 对象
            const chart = new F2.Chart({
                id: name,
                pixelRatio: window.devicePixelRatio, // 指定分辨率
            });

            // Step 2: 载入数据源
            chart.source(data);

            // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
            chart.interval().position("genre*sold").color("genre");

            // Step 4: 渲染图表
            chart.render();

            // 绘制柱状图文本
            const offset = -5;
            const canvas = chart.get("canvas");
            const group = canvas.addGroup();
            const shapes = {};
            data.forEach(function (obj) {
                const point = chart.getPosition(obj);
                const text = group.addShape("text", {
                    attrs: {
                        x: point.x,
                        y: point.y + offset,
                        text: `${obj.sold}票`,
                        textAlign: "center",
                        textBaseline: "bottom",
                        fill: "#808080",
                    },
                });

                shapes[obj.year] = text; // 缓存该 shape, 便于后续查找
            });
        },
    },
};
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    background-image: url("../assets/bkg.jpg");
    background-size: cover;
    background-repeat: repeat-y;
    .center {
        background: rgba(0, 0, 0, 0);
        position: relative;
        top: 45%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .topName {
            .van-cell {
                background-color: rgba(0, 0, 0, 0);
            }
        }
    }
    .container {
        background: #fff;
    }
    .submit {
        width: 100%;
        height: 50px;
        .cont {
            position: fixed;
            bottom: 0px;
            width: 100%;
            background: rgba(0, 0, 0, 0);
        }
    }
}
* {
    -webkit-touch-callout: none; /*系统默认菜单被禁用*/
    -webkit-user-select: none; /*webkit浏览器*/
    -khtml-user-select: none; /*早期浏览器*/
    -moz-user-select: none; /*火狐*/
    -ms-user-select: none; /*IE10*/
    user-select: none;
}
/deep/.van-radio {
    display: flex;
    flex-direction: row-reverse;
    .van-radio__label {
        flex: 1;
        text-align: center;
    }
}
</style>
