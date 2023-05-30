import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login";
import Main from "../views/Main";
import Register from "../views/Register";
import DashBoard from "../views/DashBoard";
import UserInfo from "../components/user/UserInfo";
import MedicalRecord from "../components/user/MedicalRecord";
import Start from "../components/dashboard/Start";
import DocterCenter from "../views/DocterCenter";
import AddPatient from "../components/user/AddPatient";
import Peabody from "../components/measureScale/Peabody";
import SearchPatient from "../components/user/SearchPatient";
import BaseInfo from "../components/patientReport/BaseInfo";
import GaitReport from "../components/patientReport/GaitReport";
import SelectCheckItems from "../components/user/SelectCheckItems";
import Gmfm from "../components/measureScale/Gmfm";
import CerebralPalsy from "../components/measureScale/CerebralPalsy";
import Fugl_Meyer from "../components/measureScale/Fugl_Meyer";
import PeabodyUnitExplain from "../components/measureScale/PeabodyUnitExplain";
import PeabodyTraining from "../components/measureScale/PeabodyTraining";
import DisableDevelopCharacter from "../components/measureScale/DisableDevelopCharacter";
import AnkleJointAxis from "../components/patientReport/AnkleJointAxis";
import BaryCenter from "../components/patientReport/BaryCenter";
import KneeJointAngle from "../components/patientReport/KneeJointAngle";
import HipJointAngle from "../components/patientReport/HipJointAngle";
import UploadFile from "../components/patientReport/UploadFile";


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main,

    },{
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/index',
      component: DashBoard,
      children: [
        { path: '/userInfo', component: UserInfo},
        { path: '/start', component: Start},
        { path: '/doctorCenter', component: DocterCenter},
        {path: '/peabodyContent', component: Peabody},
        {path: '/unitExplain', component: PeabodyUnitExplain},
        {path: '/peabodyTraining', component: PeabodyTraining},
        {path: '/disableDevelop', component: DisableDevelopCharacter},
        {path: '/gmfm', component: Gmfm},
        {path: '/cerebralPalsy', component: CerebralPalsy},
        {path: '/fuglmeyer', component: Fugl_Meyer},
        {path: '/addPatient', component: AddPatient},
        {path: '/searchPatient', component: SearchPatient},
        {path: '/selectCheckItems', component: SelectCheckItems},
        {path: '/getAnkleJointAxis', component: AnkleJointAxis},
        {path: '/getBaryCenter', component: BaryCenter},
        {path: '/getKneeAngle', component: KneeJointAngle},
        {path: '/getHipAngle', component: HipJointAngle},
        {path: '/uploadFile', component: UploadFile},
        {path: '/medicalRecord',
          component: MedicalRecord,
          children: [
            {path: '/baseInfo', component: BaseInfo},
            {path: '/gaitReport', component: GaitReport}
          ]
        }
      ]
    },

  ]
})
