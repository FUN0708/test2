<template>
  <div>
    {{patientInfo.patientID}}
    <el-card shadow="None">
      <div style="height: 400px" ref="chart1"></div>
<!--      <div style="height: 400px" ref="chart2"></div>-->
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HipJointAngle",
  props: {
    patientInfo: ''
  },
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
      axios.post("/getHipAngle", {
        patientID: this.patientInfo.patientID,
        projectID: '1',
        testDate: this.patientInfo.testDate,
        index: 15
      }).then(resp =>
        {
          this.ldata = resp.data.left_hip
          this.rdata = resp.data.right_hip

          for(let i = 0; i < this.ldata.length; i++){
            this.xdata[i] = i;
          }
          console.log(this.xdata)
          this.initCharts1()
          // this.initCharts2()
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
          text: '左右髋关节角度'
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
        legend: {
          data: ['left', 'right']
        },
        // dataZoom: [
        //   {
        //     type: 'inside',
        //     start: 0,
        //     end: 100
        //   },
        //   {
        //     start: 0,
        //     end: 100
        //   }
        // ],
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
          text: '右髋关节角度'
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

<style scoped>

</style>
