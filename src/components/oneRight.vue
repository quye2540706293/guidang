<template>
 <div style="float: left; width: 100%; height: 100%">
				<div style="width: 100%; height: calc(33.33% - 8px)" class="card">
					<!-- <img class="back-img" src="../assets/border1.png" /> -->
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{oneTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record" >

						<div style="width: 100%; height: 30%  ;display: flex; align-items: center; justify-content: space-around; ">
						<div style="width: 28%">
							<img src="../assets/oneRone.png" align='absmiddle'><br />
							<!-- <span style="font-size: 6px">月保修量</span><br /> -->
							<span class="member-number member-number-oneRone">1247</span>
						</div>
						<div style="width: 28%">
							<img src="../assets/oneRTwo.png" align='absmiddle'><br />
							<!-- <span style="font-size: 6px">月投诉量</span><br /> -->
							<span class="member-number member-number-oneRone">1247</span>
						</div>
						<div style="width: 28%">
							<img src="../assets/oneRTh.png" align='absmiddle'><br />
							<!-- <span style="font-size: 6px">月访客量</span><br /> -->
							<span class="member-number member-number-oneRone ">1247</span>
						</div>
						<div style="width: 28%">
							<img src="../assets/oneRFour.png" align='absmiddle'><br />
							<!-- <span style="font-size: 6px">日车辆进出量</span><br /> -->
							<span class="member-number member-number-oneRone">1247</span>
						</div>
						
						


						</div>
						<div id='propertyStatistics' style="width: 100%; height: 70% ;display:flex;" >
							
						</div>
					</div>
				</div>
				<div style="width: 100%; height: 12px"></div>
				<div style="width: 100%; height: calc(33.33% - 8px)" class="card">
					<!-- <img class="back-img" src="../assets/border2.png" /> -->
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{twoTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record" >

						<div style="width: 100%; height: 30%  ;display: flex; align-items: center; justify-content: space-around; ">
							<div style="width: 100%">
								<img src="../assets/tp1.png" align='absmiddle'>
							<span class="aroundStyle">设备数量</span><br />
							<span class="member-number">1247</span>
						</div>
						<div style="width: 10px; height: 50% ;border-right:1px dashed #02A6E7"></div>
						<div style="width: 100%">
							<img src="../assets/tp1.png" align='absmiddle'>
							<span class="aroundStyle">车停通道数量</span><br />
							<span class="member-number">1247</span>
						</div>
						


						</div>
						<div id="visitorstatistics" style="width: 100%; height: 70%"></div>
					</div>
				</div>


				<div style="width: 100%; height: 12px"></div>
				<div style="width: 100%; height: calc(33.33% - 8px)" class="card">
					<!-- <img class="back-img" src="../assets/borderl2.png" /> -->
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{threeTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record" >

						<div style="width: 100%; height: 30%  ;display: flex; align-items: center; justify-content: space-around; ">
							<div style="width: 100%">
								<img src="../assets/tp1.png" align='absmiddle'>
							<span class="aroundStyle">设备数量</span><br />
							<span class="member-number">1247</span>
						</div>
						<div style="width: 10px; height: 50% ;border-right:1px dashed #02A6E7"></div>
						<div style="width: 100%">
							<img src="../assets/tp1.png" align='absmiddle'>
							<span class="aroundStyle">车停通道数量</span><br />
							<span class="member-number">1247</span>
						</div>




						</div>
						<div id="statisticalChannel" style="width: 100%; height: 70%"></div>
					</div>
				</div>
</div>
</template>

<script>
import Vue from "vue";

export default {
  name: "oneRight",
  data() {
    return {
      oneTitle: "物业统计",
      twoTitle: "访客统计",
      threeTitle: "通道统计",
    };
  },
  mounted() {
	  		this.initPropertyStatistics()
	  		this.initVisitorstatistics();
			this.initStatisticalChannel();
			window.addEventListener("resize", () => {
				this.$echarts.init(document.getElementById("propertyStatistics")).resize();
				this.$echarts.init(document.getElementById("visitorstatistics")).resize();
				this.$echarts.init(document.getElementById("statisticalChannel")).resize();

			});
		},
		methods: {
			initPropertyStatistics(){
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("propertyStatistics"));
				// 绘制图表
				let dataL = [{ name: '投诉完成比例',value: 70,itemStyle:{
					color:'#FAC03C'
				}}, { name: '保修完成比例',value: 68,itemStyle:{
					color:'#4AB1FF'
				}}];
				let dataR = [{name: '保修完成比例',value: 40,itemStyle:{
					color:'#01EEFD'
				}}, {name: '投诉完成比例',value: 68,itemStyle:{
					color:'#FE4B5B'
				}}];
				myChart.setOption({
					
            //    graphic: [{　　　　　　　　　　　　　　　　//环形图中间添加文字
            //         type: 'text',　　　　　　　　　　　　//通过不同top值可以设置上下显示
            //         left: 'center',　　　　　　　　　　
            //         top: '30%',
            //         style: {　　　　　　　　　　　　　　　　
            //             text: "80%",//（自己设置显示内容）,
            //             textAlign: 'center',
            //             fill: '#000',　　　　　　　　//文字的颜色
            //             width: 30,
            //             height: 30,
            //             fontSize: 18,
            //             color: "#4d4f5c",
            //             fontFamily: "Microsoft YaHei"
            //         }
            //     }, {
            //         type: 'text',
            //         left: 'center',
            //         top: '45%',
            //         style: {
            //             text: '达标率',
            //             textAlign: 'center',
            //             fill: '#000',
            //             width: 30,
            //             height: 30,
            //             fontSize: 18,
            //         }
            //     }],
    series: [{
        type: 'pie',
        radius: ["55%", "75%"],
        center: ['50%', '50%'],
        data: dataL,
        label: {
           show:true,
		   fontSize: '5vw',
		   lineHeight: 25,
            position:'center',
			fontWeight: 'bold',
			 color:'#fff',
			formatter:'{b}\n{d}%'
        },
        itemStyle:{
            // color:color1
        },
        emphasis: {
                label: {
                    show: true,
                    
                    fontSize: '5vw',
                    fontWeight: 'bold',
					lineHeight: 25,
                    color:'#44D7B6',
                    formatter:'{b}\n{d}%'
						// font-size: 26px;
						// font-family: DINAlternate-Bold, DINAlternate;
						// font-weight: bold;
						// color: #44D7B6;
						// line-height: 30px
                },
            },
        left: 0,
        right: '50%',
        top: 0,
        bottom: 0
    }, 
	
	{
        type: 'pie',
        radius: ["55%", "75%"],
        center: ['50%', '50%'],
        data: dataR,
        label: {
            show:true,
			fontSize: '6vw',
            position: 'center',
			lineHeight: 25,
			color:'#fff',
			formatter:'{b}\n{d}%'
        },
        emphasis: {
                label: {
                    show: true,
                    fontSize: '6vw',
					lineHeight: 25,
                    fontWeight: 'bold',
                    formatter:'{b}\n{d}%',
                    color:'#44D7B6',

                },
            },
        left: '50%',
        right: 0,
        top: 0,
        bottom: 0
    }]
})
			},
			initVisitorstatistics() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("visitorstatistics"));
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: "axis",
					},
					// legend: {
					// 	data: ["网点"],
					// 	textStyle: {
					// 		color: "white",
					// 	},
					// 	right: 15,
					// 	icon: "roundRect",
					// 	itemWidth: 10,
					// 	itemHeight: 10,
					// },
					grid: {
						left: "10px",
						right: "20px",
						bottom: "5px",
						top: "30px",
						containLabel: true,
					},
					xAxis: {
						type: "category",
						axisTick: {
							show: false,
						},
						axisLine: {
							lineStyle: {
								color: "#28427a",
							},
						},
						data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
					},
					yAxis: {
						type: "value",
						axisLine: {
							show: true,
							lineStyle: {
								color: "#28427a",
							},
						},
						splitLine: {
							show: false,
						},
					},
					series: [{
						name: "网点",
						type: "bar",
						barMaxWidth: 23,
						itemStyle: {
							normal: {
								label: {
									show: true, //开启显示
									position: "top", //在上方显示
									textStyle: {
										//数值样式
										color: "#3abeaa",
										//    fontSize: 16
									},
								},
								barBorderRadius: 5,
								color: new Vue.prototype.$echarts.graphic.LinearGradient(
									0,
									1,
									0,
									0,
									[{
											offset: 0,
											color: "#0266c7", // 0% 处的颜色
										},
										{
											offset: 0.6,
											color: "#00b3b2", // 60% 处的颜色
										},
										{
											offset: 1,
											color: "#00f2ab", // 100% 处的颜色
										},
									],
									false
								),
							},
						},
						data: [467, 302, 279, 186,86,279, 186],
					}, ],
				});
			},
			initStatisticalChannel() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("statisticalChannel"));
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: "axis",
					},
					legend: {
						data: ["图例一", "图例二"],
						textStyle: {
							color: "white",
						},
						right: 15,
						icon: "roundRect",
						borderRadius: 20,
						itemWidth: 16,
						itemHeight: 5,
					},
					grid: {
						left: "10px",
						right: "20px",
						bottom: "0px",
						top: "30px",
						containLabel: true,
					},
					xAxis: {
						type: "category",
						boundaryGap: false,
						axisTick: {
							show: false,
						},
						axisLine: {
							lineStyle: {
								color: "#28427a",
							},
						},
						data: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
					},
					yAxis: {
						type: "value",
						axisLine: {
							show: true,
							lineStyle: {
								color: "#28427a",
							},
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: "dashed",
								color: "#ffffff23",
							},
						},
					},
					series: [

						{
							name: "图例一",
							type: "line",
							stack: "总量",
							data: [120, 132, 101, 134, 90, 230, 210],

                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: "rgba(0, 229, 255, 0.7)", // 0% 处的颜色
                                    },
                                        {
                                            offset: 0.81,
                                            color: "rgba(0, 64, 87, 0.6)", // 60% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0, 23, 45, 0)", // 100% 处的颜色
                                        },






                                    ],
                                    global: false // 缺省为 false
                                }
                            },
                            lineStyle:{
                                color:'#44D7B6',
                            }
						},
						{
							name: "图例二",
							type: "line",
							stack: "总量",
							data: [220, 182, 191, 234, 290, 330, 310],
                            areaStyle: {
                                color: {
                                    // type: 'linear',
                                    // x: 0,
                                    // y: 0,
                                    // x2: 0,
                                    // y2: 1,
                                    // colorStops: [{
                                    // 		offset: 0,
                                    // 		color: "#0266c7", // 0% 处的颜色
                                    // 	},
                                    // 	{
                                    // 		offset: 0.6,
                                    // 		color: "#00b3b2", // 60% 处的颜色
                                    // 	},
                                    // 	{
                                    // 		offset: 1,
                                    // 		color: "#00f2ab", // 100% 处的颜色
                                    // 	},
                                    //
                                    //
                                    // ],
                                    // global: false // 缺省为 false
                                }
                            },
                            lineStyle:{
                                color:'#426DBB',
                            }
						}
					],
				});
			},
		},
 
};
</script>


