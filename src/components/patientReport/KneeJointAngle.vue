<template>
  <div>
    <el-card header="左右膝关节角度变化曲线">
      <div style="height: 400px" ref="chart1"></div>
      <div style="height: 400px" ref="chart2"></div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "KneeJointAngle",
  data () {
    return {
      ldata: [],
      rdata: [],
      xdata: []
    };
  },
  created() {
    this.getJointAnkle()
  },
  methods: {
    async getJointAnkle() {
      axios.post("/getKneeAngle", {
        patientID: '51018319990708292X',
        projectID: '1',
        testDate: '2022-10-27',
        jointIndex: 15
      }).then(resp =>
        {
          this.ldata = resp.data[0]
          this.rdata = resp.data[1]

          for(let i = 0; i < this.ldata.length; i++){
            this.xdata[i] = i;
          }
          console.log(this.xdata)
          this.initCharts1()
          this.initCharts2()
          // console.log(resp.data)
        }

      )
    },
    initCharts1 () {
      let myChart = this.$echarts.init(this.$refs.chart1, );
      // console.log(this.$refs.chart)
      // 绘制图表
      myChart.setOption({
        title: {
          text: '左膝关节角度'
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          data: ['left', 'right']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xdata
        },
        yAxis: {
          type: 'value'
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 100
          }
        ],
        series: [
          {
            data: this.ldata,
            type: 'line',
            name: 'left',
            smooth: true
          },
          {
            data: this.rdata,
            type: 'line',
            name: 'right',
            smooth: true
          }
        ]
      });
    },
    initCharts2 () {
      let myChart = this.$echarts.init(this.$refs.chart2);
      // console.log(this.$refs.chart)
      // 绘制图表
      myChart.setOption({
        title: {
          text: '右膝关节角度'
        },
        tooltip: {
          trigger: 'axis'
        },

        grid: {
          left: '2%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xdata
        },
        yAxis: {
          type: 'value'
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 100
          }
        ],
        series: [
          {
            data: this.rdata,
            type: 'line',
            smooth: true
          }
        ]
      });
    }
  },
}
</script>
r
<style scoped>

</style>
