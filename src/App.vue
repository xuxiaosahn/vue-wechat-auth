<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->
     <!-- tabbar -->
    <!-- <TabBar></TabBar> -->
    <h1 class="formTitle" align="center">智慧行政绑定</h1>
    <h4 class="subFormTitle" align="center">用户首次登陆，需进行身份绑定</h4>
    
    <van-form @submit="onSubmit">
      <van-field v-model="formData.name" label="姓名" placeholder="姓名" :rules="[{ required: true, message: '请填写姓名' }]"/>
      <van-field v-model="formData.tel" type="tel" label="手机号"  placeholder="手机号" :rules="[{ required: true, message: '请填写手机号' }]"/>
      <van-field v-model="formData.code" type="number" label="员工编号"  placeholder="员工编号" :rules="[{ required: true, message: '请填写员工编号' }]"/>
      <van-field v-model="openid" type="openid" label="识别码" readonly="true"/>
      <label class="info">首次使用需要绑定身份信息</label>
      <div style="margin: 16px;">
        <van-button square block type="primary" native-type="submit">
          确定
        </van-button>
      </div>
    </van-form>
    <div class="footer-box">
      <p>COPYRIGHT &copy; 2020</p>
      <p>苏州银行智慧行政</p>
    </div>
  </div>
</template>
<script>
// import TabBar from '@/components/TabBar'
import qs from 'qs'
import {loginByCode,getUserInfo} from '@/api/user.js'
export default {
  // oBNDVvlCWVYGPmHNO2jaVZ33qGNo
  name: 'App',
  components: {
    // TabBar
  },
  data() {
    return {
      formData:{
        name:'',
        tel:'',
        code:'',
        cerNo:''
      },
      code : this.$route.query.code,
      openid:''
    }
  },
  created(){
    //TODO 判断逻辑
    
  },
  mounted(){
    const url = window.location.href
    const urlParams = qs.parse(url.split('?')[1])
    console.log(urlParams)
    this.code = urlParams.code
    //获取access_token
    let param1 = {
      appId: 'wxc120b5ea303b1de4',
      secret: 'a21983273506928610254b8020cfce7e',
      code: this.code,
      grant_type: 'authorization_code'
    }
    loginByCode(param1).then(res=>{
      this.openid = res.openid
    })
  },
  methods: {
      getLoginName(openid){
          
      }
  }
}
</script>

<style scoped>
.formTitle{
  color: #00bb00;
}
.subFormTitle{
  color: #888888;
}
.info{
  margin-left: 10px;
  padding: 5px;
  font-size: 10px;
  color: #888;
}
.footer-box{
  padding: 5px;
  font-size: 8px;
  color: #888;
  line-height: 10px;
  text-align: center;
}
</style>
