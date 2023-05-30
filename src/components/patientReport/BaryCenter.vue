<template>
  <div>
    <el-card header="质心移动轨迹" >
      <div style="height: 300px" ref="chart1"></div>
      <div style="height: 300px" ref="chart2"></div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BaryCenter",

  data () {
    return {
      xdata: [],
      ydata: [],
      zdata: [],
    };
  },
  created() {
    this.getJointAnkle()
  },
  methods: {
    async getJointAnkle() {
      axios.post("/getBaryCenter?id=51018319990708292X", {
        // id: '51018319990708292X',
        // projectID: '1',
        // testDate: '2022-10-27',
        // jointIndex: 15
      }).then(resp =>
        {
          this.xdata = resp.data[0]
          this.ydata = resp.data[1]
          this.zdata = resp.data[2] // 左脚踝Z数据

          // console.log(this.xdata)
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
          text: '质心上下偏移'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          // data: ['left', 'right']
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
          data: this.zdata
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
            data: this.ydata,
            type: 'line',
            smooth: true
          },
        ]
      });
    },
    initCharts2 () {
      let myChart = this.$echarts.init(this.$refs.chart2);
      // console.log(this.$refs.chart)
      // 绘制图表
      myChart.setOption({
        title: {
          text: '质心左右偏移'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          // data: ['left', 'right']
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
          data: this.zdata
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
            data: this.xdata,
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
