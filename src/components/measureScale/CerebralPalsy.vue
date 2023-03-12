<template>
  <div>
    <h2 style="text-align: left">脑瘫粗大运动功能分级</h2>
    <el-tabs v-model="activeName"
             type="card"
             style="font-size: medium">
      <el-tab-pane label="分级介绍" name="zero">
        <p style="text-align: left; line-height: 25px">
            脑瘫粗大运动功能分级系统是以自发运动为依据，尤其注重于坐（躯干控制）和行走。
          当我们定义五级分类系统时，主要标准就是各个等级之间运动功能的区分要具有临床意义。
          各级运动功能水平之间的区别是根据以下 3 个方面来判断的：功能受到的限制；是否需要辅
          助技术，包括移动辅助器具（如助行器、拐杖和手杖）和轮椅等；活动质量降低程度。Ⅰ级
          包括了神经运动损伤的孩子，他们的功能受限较脑瘫引起的典型功能受限要少，在传统意义
          上这些孩子会被诊断为“轻度脑功能障碍”或者“轻微脑瘫”。Ⅰ级和Ⅱ级之间的区别不象
          其他级别间那么明显，尤其是对 2 岁以下的孩子。
        </p>
        <p style="text-align: left; line-height: 25px">
          焦点在于判断哪个级别能够最好地描述孩子目前的活动能力及其运动功能受到的限制。
          重点要放在孩子在家里、学校及社区设施中的日常表现，因此重要的是对日常的表现（不是
          最好能力）进行分类，不包括对预后的判断。必须要记住我们的目的是对孩子当前的粗大运
          动功能进行分级，而不是评判活动的质量或者进步的潜力。
        </p>
        <p style="text-align: left; line-height: 25px">
            对于 5 个级别的描述是概括性的，并不打算描述某个孩子所有方面的运动功能。例如，
          一个偏瘫的孩子虽然不能够手膝爬行，但如果其他方面都符合级别Ⅰ的描述，就可以被归类
          到Ⅰ级。这个量表是顺序量表，并不说明各个等级之间的差距是相同的，也不说明脑瘫患儿
          是平均分布在这 5 个等级中的。我们还提供了区别每相邻两级之间的概括性说明，以帮助判
          断孩子目前的粗大运动功能最接近于哪个级别。
        </p>
        <p style="text-align: left; line-height: 25px">
            各个级别的标题都代表了 6～12 岁之间的孩子应该能达到的最高活动水平。我们认识到
          对运动功能的分级是需要依据年龄的，尤其在婴儿期和患儿早期。因此，在各个级别中都对
          不同年龄段的孩子分别进行了描述。对每个年龄段功能水平及局限性的描述可以作为指南，
          但不够全面，不能作为标准。小于 2 岁的孩子如果是早产，就要使用他们的纠正年龄进行判
          断。
        </p>
        <p style="text-align: left; line-height: 25px">
            我们努力使观察重点放在孩子的运动功能上而不是他们的局限上。有一个基本原则：如
          果某个孩子能够完成某个特定级别中的功能，他的粗大运动功能就应该归到这一级或者上一
          级中去。相反，如果其完成某个特定级别中的功能，那么他的粗大运动功能就要被归到低一
          级中去。
        </p>
      </el-tab-pane>
      <el-tab-pane label="小于2岁" name="first">
        <div v-for="p in project2" style="text-align: left; height: 60px;">
          <p style="line-height: 30px"><b>{{'等级' + p.scale}}</b> :  {{p.explain}}</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="2-4岁" name="second">
        <div v-for="p in project4" style="text-align: left; height: 60px;">
          <p style="line-height: 30px"><b>{{'等级' + p.scale}}</b> :  {{p.explain}}</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="4-6岁" name="third">
        <div v-for="p in project6" style="text-align: left; height: 60px;">
          <p style="line-height: 30px"><b>{{'等级' + p.scale}}</b> :  {{p.explain}}</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="6-12岁" name="fourth">
        <div v-for="p in project12" style="text-align: left; height: 60px;">
          <p style="line-height: 30px"><b>{{'等级' + p.scale}}</b> :  {{p.explain}}</p>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CerebralPalsy",
  data() {
    return {
      project2: [],
      project4: [],
      project6: [],
      project12: [],
      projectList: [],
      activeName: 'zero'
    }
  },
  created() {
    this.getAllProject()
  },
  methods: {
    async getAllProject() {
      axios.post("/cerebralpalsy/getAllProject", {
      }).then(resp =>
        {
          this.projectList = resp.data;
          let i= 0;
          while(i < this.projectList.length){
            if(i < 5) {
              for(let j = 0; j < 5; j++){
                this.project2[j] = this.projectList[i++];
              }
            }
            if(i >= 5 && i < 10) {
              for(let j = 0; j < 5; j++){
                this.project4[j] = this.projectList[i++];
              }
            }
            if(i >= 10 && i < 16){
              for(let j = 0; j < 5; j++){
                this.project6[j] = this.projectList[i++];
              }
            }
            for(let j = 0; j < 5; j++){
              this.project12[j] = this.projectList[i++];
            }
          }
        }
      );
    },
    handleClick(tab, event) {

    }
  }
}
</script>

<style scoped>

</style>
