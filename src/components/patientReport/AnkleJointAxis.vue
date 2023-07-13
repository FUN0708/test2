<template>
  <div>
    {{patientInfo.patientID}}
    <el-card shadow="None">
      <div style="height: 400px" ref="chart1"></div>
      <div style="height: 400px; margin-top: 20px" ref="chart2"></div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AnkleJointAxis",
  props: {
    patientInfo: ''
  },
  data () {
    return {
      lzdata: [],
      rzdata: [],
      lxdata: [],
      rxdata: [],
      xdata: []
    };
  },
  created() {
    this.getJointAnkle()
  },
  methods: {
    async getJointAnkle() {
      axios.post("/getAnkleJointAxis", {
        patientID: this.patientInfo.patientID,
        projectID: '1',
        testDate: this.patientInfo.testDate,
        index: 15
      }).then(resp =>
        {
          this.lxdata = resp.data[0]
          this.rxdata = resp.data[1]
          this.lzdata = resp.data[2] // 左脚踝Z数据
          this.rzdata = resp.data[3] // 右脚踝Z数据

          for(let i = 0; i < this.lxdata.length; i++){
            this.xdata[i] = i;
          }
          // console.log(this.xdata)
          this.initCharts1()
          this.initCharts2()
          console.log(resp.data.length)
        }

      )
    },
    initCharts1 () {
      let myChart = this.$echarts.init(this.$refs.chart1);
      // console.log(this.$refs.chart)
      // 绘制图表
      myChart.setOption({
        title: {
          text: '左右踝关节Z轴位移'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['left', 'right']
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
            data: this.lzdata,
            name: 'left',
            type: 'line',
            smooth: true
          },
          {
            data: this.rzdata,
            name: 'right',
            type: 'line',
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
          text: '左右踝关节X轴偏移'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['left', 'right']
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
            data: this.lxdata,
            name: 'left',
            type: 'line',
            smooth: true
          },
          {
            data: this.rxdata,
            name: 'right',
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
