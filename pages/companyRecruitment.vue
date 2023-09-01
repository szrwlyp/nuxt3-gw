<script setup lang="ts">
import { ref } from "vue";

const sourceData = ref([
  {
    post: "Java工程师",
    responsibility: {
      label: "工作职责",
      value: [
        "1、参与基于J2EE的项目的设计与开发；",
        "2、定制软件的开发和已有软件系统的升级和维护；",
        "3、现场的系统安装、调试及后期的维护服务支持。",
      ],
    },
    ask: {
      label: "任职要求",
      value: [
        "1、熟悉Java和SpringMVC、SpringBoot、SpringCloud等流行架构，熟练Idea等工具；",
        "2、熟练掌握Vue、HTML、CSS和JS，能够进行编写和调试；",
        "3、熟悉MySql、Redis等数据库，能够熟练进行数据库操作；",
        "4、具有良好的团队协作能力和沟通能力，能够适应团队协同开发的需要；",
        "5、具有解决问题的能力，能适应独立开发工作。",
      ],
    },
  },
  {
    post: "系统工程师",
    responsibility: {
      label: "工作职责",
      value: [
        "1、负责我司关于小型机、存储、容灾备份、网络产品等集成项目的实施工作；",
        "2、在所负责的相关项目中编写具体实施方案，在实施过程中提供客户所需要的技术文档与服务报告；",
        "3、了解所负责客户的核心生产系统的拓扑结构与系统架构，为销售提供客户的设备资料；",
        "4、负责Windows、Linux、Oracle、中间件、双机软件等系统软件的安装调试；",
        "5、完成公司技术部门交办的其他工作。",
      ],
    },
    ask: {
      label: "任职要求",
      value: [
        "1、熟悉主流服务器、存储及相关重要软件等安装维护配置；",
        "2、熟悉虚拟化软件安装维护配置；",
        "3、能够快速了解我司客户的系统现状、现有硬件及系统架构。",
      ],
    },
  },
  {
    post: "系统分析师",
    responsibility: {
      label: "工作职责",
      value: [
        "1、对软件设计师和软件工程师进行软件开发的管理和技术指导；",
        "2、主持需求调查、系统分析、概要设计、重要模块的设计工作；",
        "3、配合市场部进行技术售前工作。",
      ],
    },
    ask: {
      label: "任职要求",
      value: [
        "1、本科或以上学历，相关行业5年以上软件设计、开发经验；",
        "2、具有较强的团队合作、有效沟通协调能力；",
        "3、具有较强的学习能力、理解指令的能力及逻辑推理判断能力；",
        "4、具有应对突发事件的应变能力，并及时的提出解决措施；",
        "5、具有较强的文字综合能力、语言表达能力和专业英语阅读能力；",
        "6、熟悉软件设计的方法和技术，具备程序设计方法、数据库原理、操作系统、系统安全、软件工程等知识；",
        "7、熟悉一项或多项应用解决方案。如：企业信息化系统规划与设计解决方案、政府信息化与电子政务解决方案等。",
      ],
    },
  },
  {
    post: "售前方案工程师",
    responsibility: {
      label: "工作职责",
      value: [
        "1、负责应用软件开发、网络硬件设备集成类项目的售前技术支持，包括技术咨询、需求调研、方案编写、概预算编制等；",
        "2、负责应用软件开发、网络硬件设备集成类项目的投标相关工作、工程实施技术指导。",
      ],
    },
    ask: {
      label: "任职要求",
      value: [
        "1、专科及以上学历，计算机相关专业，至少两年以上工作经验。",
        "2、能独立完成软件开发、网络硬件设备集成类项目技术方案、实施方案、概预算的编写；",
        "3、具备系统集成方案设计及实施交付经验，熟悉软件开发、服务器、网络、信息安全、数据存储、备份容灾等数据中心主要技术，熟悉主流IT厂商（华为、浪潮、HP、IBM等）设备的产品特性、配置等；能够根据客户业务需求设计编制IT配置方案；",
        "4、熟悉投标工作流程及投标文件编制；",
        "5、具有良好的学习能力、沟通能力、文档编写能力、团队协作精神，具有高度的职业进取心和责任心；",
        "6、有相关资格证书优先考虑。",
      ],
    },
  },
  {
    post: "客户经理",
    responsibility: {
      label: "工作职责",
      value: [
        "1、市场开拓及客户发掘；",
        "2、客户关系管理；",
        "3、负责项目的售前、售中及售后管理工作。",
      ],
    },
    ask: {
      label: "任职要求",
      value: [
        "1、性格外向，具备开拓精神；",
        "2、具有良好的语言表达能力、沟通协调能力、公关交际能力、谈判能力；",
        "3、熟悉软件技术文档的编写，具备良好的文档编制习惯和规范的代码书写；",
        "4、身体健康，形象佳；",
        "5、有从事系统集成工程及软件项目客户管理相关工作经验者优先。",
      ],
    },
  },
]);
</script>

<template>
  <div class="company-aboutus">
    <div class="header-banner">
      <img src="/images/about_cc/list_banner7.jpg" alt="" />
    </div>
    <div class="company-aboutus-content">
      <h1 class="title">招贤纳士</h1>
      <div class="content">
        <div
          class="content-item"
          v-for="(item, index) in sourceData"
          :key="index"
        >
          <h4 class="recruit_title">{{ item.post }}</h4>
          <div class="recruit_content">
            <div class="recruit_content-item">
              <h4>{{ item.responsibility.label }}</h4>
              <p
                v-for="(r_item, r_index) of item.responsibility.value"
                :key="r_index"
              >
                {{ r_item }}
              </p>
              <h4>{{ item.ask.label }}</h4>
              <p v-for="(a_item, a_index) of item.ask.value" :key="a_index">
                {{ a_item }}
              </p>
            </div>
          </div>
        </div>
        <div class="content-item">
          <h4 class="recruit_title">联系方式</h4>
          <div class="recruit_content">
            <div class="recruit_content-item">
              <div class="contact_hr">
                <img src="/images/about_cc/icon-people.png" alt="联系人" />
                <span>联 系 人： 刘小姐</span>
              </div>
              <div class="contact_hr">
                <img
                  src="/images/about_cc/icon-phone-recruitment.png"
                  alt="电话"
                />
                <span>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话： 0771-5507771</span>
              </div>
              <div class="contact_hr">
                <img src="/images/about_cc/icon-mail.png" alt="招聘信箱" />
                <span>招聘信箱： hr@chaochuang.com.cn</span>
              </div>
              <div class="contact_hr">
                <img src="/images/about_cc/icon-ad.png" alt="公司地址" />
                <span>公司地址：广西南宁市青秀区东葛路118号万达金座13层</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.company-aboutus {
  .header-banner {
    display: flex;
    justify-content: center;
  }
  .company-aboutus-content {
    width: 1200px;
    margin: 20px auto;
    .title {
      color: #1a82d9;
      font-size: 1.4em;
      padding: 10px 0;
      border-bottom: 1px solid #e9e9e9;
    }
    .content {
      padding: 30px;

      .content-item {
        width: 100%;
        padding: 10px 50px;
        .recruit_title {
          background: #eaeaea;
          padding: 8px 26px;
          font-weight: normal;
          font-size: 1.2em;
        }
        .recruit_content-item {
          padding: 20px;
          background: #fafafa;
          h4,
          p {
            padding: 4px 0;
          }
          p {
            color: #595757;
          }
          .contact_hr {
            display: flex;
            align-items: center;
            padding: 4px 0;
            span {
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .company-aboutus {
    .header-banner {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .company-aboutus-content {
      width: 100%;
      /* margin: 20px auto; */
      padding: 20px;
      .title {
        color: #1a82d9;
        font-size: 1.4em;
        padding: 10px 0;
        border-bottom: 1px solid #e9e9e9;
      }
      .content {
        padding: 30px;

        .content-item {
          width: 100%;
          padding: 10px 0;
          .recruit_title {
            background: #eaeaea;
            padding: 8px 26px;
            font-weight: normal;
            font-size: 1.2em;
          }
          .recruit_content-item {
            padding: 20px;
            background: #fafafa;
            h4,
            p {
              padding: 4px 0;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 898px) {
  .company-aboutus {
    .header-banner {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .company-aboutus-content {
      width: 100%;
      margin: 20px auto;
      .title {
        color: #1a82d9;
        font-size: 1.4em;
        padding: 10px 0;
        border-bottom: 1px solid #e9e9e9;
      }
      .content {
        padding: 30px;

        .content-item {
          width: 100%;
          padding: 0;
          .recruit_title {
            background: #eaeaea;
            padding: 8px 26px;
            font-weight: normal;
            font-size: 1.2em;
          }
          .recruit_content-item {
            padding: 20px;
            background: #fafafa;
            h4,
            p {
              padding: 4px 0;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .company-aboutus {
    .header-banner {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .company-aboutus-content {
      width: 100%;
      margin: 10px auto;
      .title {
        color: #1a82d9;
        font-size: 1.4em;
        padding: 10px 0;
        border-bottom: 1px solid #e9e9e9;
      }
      .content {
        padding: 0;
        .content-item {
          width: 100%;
          padding: 10px 0;
          .recruit_title {
            background: #eaeaea;
            padding: 8px 26px;
            font-weight: normal;
            font-size: 1.2em;
          }
          .recruit_content-item {
            padding: 20px;
            background: #fafafa;
            h4,
            p {
              padding: 4px 0;
              line-height: 1.8em;
            }
          }
        }
      }
    }
  }
}
</style>
