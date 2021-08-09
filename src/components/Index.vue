<template>
	<div style="height: 100%; width: 100%; position: relative" class="box">
		<img  class="boxDownImg" style="height: 100%;width:100%; position:absolute;left: 0;top: 0;z-index: -2;" src="../assets/bg.png" />
		<div style="width: 100%; height: 80px; position: relative; text-align: center">
			<img style="height: 100%; width: 100%; position: absolute; left: 0;z-index: -1" src="../assets/header.png" />
			<p class="title">{{ title }}</p>
			<p class="time-info">
				<span>
					<img style="margin-bottom: -3px" src="../assets/sun.png" /> &nbsp;
					{{ timeInfo.temperature }}℃ &nbsp; {{ timeInfo.weather }}
				</span>
				<span>
					{{ timeInfo.date }}&nbsp; {{ timeInfo.h }}:{{ timeInfo.min }}:{{timeInfo.s}}&nbsp;
				</span>
				<span>
					<i class="el-icon-switch-button"></i> &nbsp;退出 &nbsp;
				</span>
			</p>
		</div>
		<div style="width: calc(100% - 40px);height: calc(100% - 110px);padding:10px 20px;">
			<div style="float: left; width: 23.49%; height: 100%;" >
				
				<oneLeft v-if="varChangeFlag=='null'"/>
				<oneLeft v-if="varChangeFlag=='buttonTitleO'" class="leftAnimation"/>
				<twoLeft v-if="varChangeFlag=='buttonTitleT'" class="leftAnimation"/>
				<threeLeft v-if="varChangeFlag=='buttonTitleTh'" class="leftAnimation"/>
			</div>
			<div style="float: left;width: calc(53.02% - 20px);height: 100%;padding: 0 10px;">

				<div style="width: 100%; height: calc(70% - 8px)" >
					<div class="headerBox">
						<div class="headerButtonLeft" style="flex:1" @click="handleHeaderBoxMShow('left')">
							<img class="headerButtonLeft-img" src="../assets/headerLeft.png" alt="" width="25%" height="25%">
							<div class="headerButtonLeft-text">选择设备</div>
						</div>
						<div class="headerButtonLeft" style="flex:1" @click="handleHeaderBoxMShow('right')">
							<img  class="headerButtonLeft-img" src="../assets/headerCenter.png" alt="" width="25%" height="25%">
							<div class="headerButtonLeft-text">选择设备</div>
						</div>
						<div  style="flex:4">
							<el-form  v-if="varChangeFlag=='buttonTitleO'" style="width:100%" class="headerButtonLeft-form">
							 <el-form-item  style="width:60%">
								<el-select v-model="value1" multiple clearable placeholder="请选择">
									<el-option v-for="city in cities" :label="city" :value="city" :key="city">{{city}}</el-option>
								</el-select>
							</el-form-item>
							<el-form-item  style="width:30%">
								<el-button type="primary" @click="onSubmit" style="background-color:#14D7D7">查询</el-button>
							</el-form-item>
							</el-form>
						</div>
					</div>
					<div v-if="headerBoxMLeftShow=='left'" class="headerBoxMLeft">
						<div class="headerBoxMLeft-header">
							
							<el-row>
								<el-col :span="24" class="chechoxStyle" >
									<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全部</el-checkbox>
								</el-col>
							</el-row>

						</div>
						<div class="headerBoxMLeft-container">
							<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
								<el-row>
									<el-col  :span="12" v-for="city in cities" :key="city" class="chechoxStyle">
										<el-checkbox :label="city" >{{city}}</el-checkbox>
									</el-col>
								</el-row>
							</el-checkbox-group>
						</div>
						<div class="headerBoxMLeft-container">

						</div>
					</div>
					<div v-if="headerBoxMLeftShow=='right'" class="headerBoxMLeft headerBoxMRight">
						<div class="headerBoxMLeft-header headerBoxMRight-header " style="">
									<el-button type="text" @click="handleHeaderBoxMRight('关')" >关</el-button>
						</div>
						<div>
						<el-button type="text" @click="handleHeaderBoxMRight('开')">开</el-button>
						</div>
						
					</div>
				</div>
				<div style="width: 100%; height: 16px"></div>
				<div style="width: 85%; height: calc(30% - 8px);margin:0 auto;  " class="footerChange">
					<div class="changeButton" @click="changeButton('buttonTitleO')" >
						<img  v-if="varChangeFlag=='buttonTitleO'" src="../assets/footerButtonImg.png" />
						<img  v-else src="../assets/footerButtonImgDefault.png"/>
						<span :class="[varChangeFlag=='buttonTitleO' ? 'spanStyleColor': '']">{{buttonTitleO}}</span>
					</div>
					<div class="changeButton" @click="changeButton('buttonTitleT')" >
						<img  v-if="varChangeFlag=='buttonTitleT'" src="../assets/footerButtonImg.png"/>
						<img  v-else src="../assets/footerButtonImgDefault.png"/>
						<span :class="[varChangeFlag=='buttonTitleT' ? 'spanStyleColor': '']">{{buttonTitleT}}</span>
						</div>
					<div class="changeButton" @click="changeButton('buttonTitleTh')">
						<img  v-if="varChangeFlag=='buttonTitleTh'" src="../assets/footerButtonImg.png"/>
						<img  v-else src="../assets/footerButtonImgDefault.png"/>
						<span :class="[varChangeFlag=='buttonTitleTh' ? 'spanStyleColor': '']">{{buttonTitleTh}}</span>
						</div>
				</div>

			</div>

			<div style="float: left; width:23.49%; height: 100%" >
				<oneRight v-if="varChangeFlag=='null'"/>
				<oneRight v-if="varChangeFlag=='buttonTitleO'" class="rightAnimation"/>
				<twoRight v-if="varChangeFlag=='buttonTitleT'" class="rightAnimation"/>
				<threeRight v-if="varChangeFlag=='buttonTitleTh'" class="rightAnimation"/>

				
			</div>

		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	import oneLeft from "@/components/oneLeft.vue";
	import oneRight from "@/components/oneRight.vue";

	import twoLeft from "@/components/twoLeft.vue";
	import twoRight from "@/components/twoRight.vue";

	import threeLeft from "@/components/threeLeft.vue";
	import threeRight from "@/components/threeRight.vue";
	
	
 const cityOptions = ['门禁', '照明设备', '安防摄像头', '广播喇叭'];
	export default {
		name: "Index",
		 components: {
			oneLeft,
			twoLeft,
			threeLeft,
			oneRight,
			twoRight,
			threeRight,
  		},
		data() {
			return {
				title: "长乐龙翔智慧社区",
				buttonTitleO: "社区全景",
				buttonTitleT: "资源中心",
				buttonTitleTh: "物业中心",
				varChangeFlag:'null',
				
				timeInfo: {
					date: "2021年5月26日",
					week: "一",
					h: "12",
					min: "57",
					s: "07",
					temperature: 27,
					weather: "晴",
				},
				formInline: {
					user: '',
					region: ''
				},
				value1: [],
				checkAll: false,
        		checkedCities: ['门禁'],
        		cities: cityOptions,
        		isIndeterminate: true,
				headerBoxMLeftShow: '',
				
			};
		},
		methods: {
			changeButton(e){
				console.log('点了');
					
				this.varChangeFlag=e

				setTimeout(()=>{
					document.querySelector('.rightAnimation').style.right=0
					document.querySelector('.leftAnimation').style.left=0
				},1)
			},
			onSubmit() {
        		console.log('submit!');
      		},
			handleCheckAllChange(val) {
				this.checkedCities = val ? cityOptions : [];
				this.isIndeterminate = false;
      		},
      		handleCheckedCitiesChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			},
			handleHeaderBoxMShow(e){
				if(e===this.headerBoxMLeftShow){
					this.headerBoxMLeftShow=''
				}else{
					this.headerBoxMLeftShow=e
				}

				

			},
			handleHeaderBoxMRight(e){
				 this.$message(e);
			}
		},
		created:function(){
			// this.changeButton(this.varChangeFlag)
		},
	};
	
</script>

<style>
	@import './styles.css';
	/* @import './assets/css/b.min.css' */
</style>
