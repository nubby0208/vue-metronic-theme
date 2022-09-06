<template>
  <!--begin::Toolbar-->
  <div class="toolbar" id="kt_toolbar">
    <!--begin::Container-->
    <div id="kt_toolbar_container" :class="{
      'container-fluid': toolbarWidthFluid,
      'container-xxl': !toolbarWidthFluid,
    }" class="d-flex flex-stack">
      <!--begin::Page title-->
      <div id="kt_page_title" data-kt-swapper="true" data-kt-swapper-mode="prepend"
        data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
        class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
        <!--begin::Title-->
        <h1 class="d-flex align-items-center text-dark fw-bold my-1 fs-3">
          {{ title }}
        </h1>
        <!--end::Title-->

        <span v-if="breadcrumbs" class="h-20px border-gray-200 border-start mx-4"></span>

        <!--begin::Breadcrumb-->
        <ul v-if="breadcrumbs" class="breadcrumb breadcrumb-separatorless fw-semobold fs-7 my-1">
          <li class="breadcrumb-item pe-3">
            <router-link to="/dashboard" class="text-muted text-hover-primary">
              Home
            </router-link>
          </li>
          <li class="breadcrumb-item">
            <span class="bullet bg-gray-200 w-5px h-2px"></span>
          </li>
          <template v-for="(item, index) in breadcrumbs" :key="index">
            <li class="breadcrumb-item text-muted">
              {{ item }}
            </li>
            <li class="breadcrumb-item">
              <span class="bullet bg-gray-200 w-5px h-2px"></span>
            </li>
          </template>
          <li class="breadcrumb-item pe-3 text-dark">
            {{ title }}
          </li>
        </ul>
        <!--end::Breadcrumb-->
      </div>
      <!--end::Page title-->

      <!--begin::Actions-->
      <div class="d-flex align-items-center py-1">
        <!--begin::Wrapper-->
        <div class="me-4">
          <!--begin::Menu-->
          <a href="#" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bold" data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
            <span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
              <inline-svg src="media/icons/duotune/general/gen031.svg" />
            </span>
            Filter
          </a>

          <Dropdown1></Dropdown1>
          <!--end::Menu-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Button-->
        <a href="#" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app"
          id="kt_toolbar_primary_button">
          Create
        </a>
        <!--end::Button-->
        <input v-model="access_token" placeholder="edit me">
        <!--begin::Button-->
        <button @click="onStitchClicked" class="btn btn-sm btn-primary" data-bs-target="#kt_modal_create_app"
          id="kt_toolbar_primary_button">
          do not click here
        </button>
        <!--end::Button-->
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Toolbar-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { toolbarWidthFluid } from "@/core/helpers/config";
import { useStitchDataStore } from '@/StitchData'
import { object } from "yup";

export default defineComponent({
  name: "KToolbar",
  props: {
    breadcrumbs: Array,
    title: String,
  },
  components: {
    Dropdown1,
  },

  data: () => ({
    userTransactionsQuery: `query userTransactions {
  user {
    bankAccounts {
      name
      transactions {
        edges {
          node {
            amount
            reference
          }
        }
      }
    }
  }
}`,
    listAccountsQuery: `query ListBankAccounts { 
  user { 
    bankAccounts {
      user { 
        bankAccounts { 
          name 
          }
          }
          }
          }
          }`,
    access_token: '4YEOqr_lh1qI3TggO5aOsoimsyWj7qUpwWj7RAaFMR0'
  }),

  methods: {
    async onStitchClicked() {

          const mockData = {
    "user": {
      "bankAccounts": [
        {
          "name": "Current account",
          "transactions": {
            "edges": [
              {
                "node": {
                  "amount": {
                    "quantity": "100000",
                    "currency": "ZAR"
                  },
                  "reference": "IBANK PAYMENT FROM  DERIV OPS ABSA BANK I817534020C2"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "1700",
                    "currency": "ZAR"
                  },
                  "reference": "POS CARD REFUND (EFFEC 02042020) IdeasCartel WOODS"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-99",
                    "currency": "ZAR"
                  },
                  "reference": "POS PURCHASE (EFFEC 01042020) IdeasCartel WOODS CARD NO.  4616"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-1700",
                    "currency": "ZAR"
                  },
                  "reference": "POS PURCHASE (EFFEC 01042020) IdeasCartel WOODS CARD NO.  4616"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-258",
                    "currency": "ZAR"
                  },
                  "reference": "ACB DEBIT:EXTERNAL MOMENTUM MM903709760BASBU8330"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-109",
                    "currency": "ZAR"
                  },
                  "reference": "MONTHLY ACC FEE SEE CHARGE STATEMENT DETAIL"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-1816",
                    "currency": "ZAR"
                  },
                  "reference": "ACB DEBIT:EXTERNAL PROFMED00010126100 APR"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-32000",
                    "currency": "ZAR"
                  },
                  "reference": "EXT STOP ORDER TO FIRSTRAND Salary Transfer FNB"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-700",
                    "currency": "ZAR"
                  },
                  "reference": "EXT STOP ORDER TO NEDBANK parking"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-12",
                    "currency": "ZAR"
                  },
                  "reference": "INTERNET BANK FEE"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-1800",
                    "currency": "ZAR"
                  },
                  "reference": "EXT STOP ORDER TO NEDBANK Housekeeper"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-12.77",
                    "currency": "ZAR"
                  },
                  "reference": "POS PURCHASE (EFFEC 27032020) Inner City Ideas Carte WOODS CARD NO.  4616"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-53",
                    "currency": "ZAR"
                  },
                  "reference": "ACB DEBIT:INTERNAL (EFFEC 25032020) PAYMENT TO ACC4550270718667000"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-23.2",
                    "currency": "ZAR"
                  },
                  "reference": "REWARDS FEE 2003231607160004081m38 REWACBP"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "3190",
                    "currency": "ZAR"
                  },
                  "reference": "ACB CREDIT PROFMED00010126100"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "39553.13",
                    "currency": "ZAR"
                  },
                  "reference": "ACB CREDIT Work Identity - Salary"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "0",
                    "currency": "ZAR"
                  },
                  "reference": "NOTIFIC FEE SMS     NOTIFYME 11 SMS NOTIFICATIONS"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-150",
                    "currency": "ZAR"
                  },
                  "reference": "CASHSEND IB CARD NO. 4616 ABSA BANK GIRLFRIEND"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "0",
                    "currency": "ZAR"
                  },
                  "reference": "NOTIFIC FEE SMS     NOTIFYME 12 SMS NOTIFICATIONS"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-1700",
                    "currency": "ZAR"
                  },
                  "reference": "POS PURCHASE (EFFEC 01032020) IdeasCartel WOODS CARD NO.  4616"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-812",
                    "currency": "ZAR"
                  },
                  "reference": "ACB DEBIT:EXTERNAL MOMENTUM MM903709760VRPX33424"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-258",
                    "currency": "ZAR"
                  },
                  "reference": "ACB DEBIT:EXTERNAL MOMENTUM MM903709760BASX33429"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-1816",
                    "currency": "ZAR"
                  },
                  "reference": "ACB DEBIT:EXTERNAL PROFMED00010126100 MAR"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-109",
                    "currency": "ZAR"
                  },
                  "reference": "MONTHLY ACC FEE SEE CHARGE STATEMENT DETAIL"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "1700",
                    "currency": "ZAR"
                  },
                  "reference": "IMMEDIATE TRF CR FIRSTRAND Boyfriend 05VWDHNYDG"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-700",
                    "currency": "ZAR"
                  },
                  "reference": "EXT STOP ORDER TO NEDBANK parking"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-32000",
                    "currency": "ZAR"
                  },
                  "reference": "EXT STOP ORDER TO FIRSTRAND Salary Transfer FNB"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-13.77",
                    "currency": "ZAR"
                  },
                  "reference": "DEBIT INTEREST"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-20",
                    "currency": "ZAR"
                  },
                  "reference": "INTERNET BANK FEE"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-1800",
                    "currency": "ZAR"
                  },
                  "reference": "EXT STOP ORDER TO NEDBANK Housekeeper"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "38794.02",
                    "currency": "ZAR"
                  },
                  "reference": "ACB CREDIT Work Identity - Salary"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "175",
                    "currency": "ZAR"
                  },
                  "reference": "POS CARD REFUND (EFFEC 27022020) Inner City Ideas Carte WOODS"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-100",
                    "currency": "ZAR"
                  },
                  "reference": "POS PURCHASE (EFFEC 27022020) Inner City Ideas Carte WOODS CARD NO.  4616"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-100",
                    "currency": "ZAR"
                  },
                  "reference": "POS PURCHASE (EFFEC 27022020) Inner City Ideas Carte WOODS CARD NO.  4616"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-175",
                    "currency": "ZAR"
                  },
                  "reference": "POS PURCHASE (EFFEC 27022020) Inner City Ideas Carte WOODS CARD NO.  4616"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "100",
                    "currency": "ZAR"
                  },
                  "reference": "IMMEDIATE TRF CR FIRSTRAND Boyfriend 05D18JDQDG"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-175.86",
                    "currency": "ZAR"
                  },
                  "reference": "POS PURCHASE (EFFEC 26022020) Inner City Ideas Carte WOODS CARD NO.  4616"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "500",
                    "currency": "ZAR"
                  },
                  "reference": "IMMEDIATE TRF CR FIRSTRAND Boyfriend 05114FDLDG"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "1057",
                    "currency": "ZAR"
                  },
                  "reference": "IBANK PAYMENT FROM  PB REWARDS ABSA BANK 20160716000408 CAS"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-23.2",
                    "currency": "ZAR"
                  },
                  "reference": "REWARDS FEE 2002231607160004081m71 REWACBP"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "0",
                    "currency": "ZAR"
                  },
                  "reference": "NOTIFIC FEE SMS     NOTIFYME 7 SMS NOTIFICATIONS"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "10",
                    "currency": "ZAR"
                  },
                  "reference": "ACB CREDIT Boyfriend"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-1000",
                    "currency": "ZAR"
                  },
                  "reference": "CASHSEND IB CARD NO. 4616 ABSA BANK GIRLFRIEND"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "0",
                    "currency": "ZAR"
                  },
                  "reference": "NOTIFIC FEE SMS     NOTIFYME 14 SMS NOTIFICATIONS"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-53",
                    "currency": "ZAR"
                  },
                  "reference": "IBANK TRANSFER 54712003-9663-0019 ABSA BANK 5471200396630019"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "4875",
                    "currency": "ZAR"
                  },
                  "reference": "IMMEDIATE TRF CR FIRSTRAND Boyfriend 057KD6N8BG"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-1816",
                    "currency": "ZAR"
                  },
                  "reference": "ACB DEBIT:EXTERNAL PROFMED00010126100 FEB"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-812",
                    "currency": "ZAR"
                  },
                  "reference": "ACB DEBIT:EXTERNAL MOMENTUM MM903709760VRPR35653"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-45",
                    "currency": "ZAR"
                  },
                  "reference": "INT DEBIT ORDER TO CREDIT LIFE ASS. 4080495962"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-258",
                    "currency": "ZAR"
                  },
                  "reference": "ACB DEBIT:EXTERNAL MOMENTUM MM903709760BASR35660"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-69",
                    "currency": "ZAR"
                  },
                  "reference": "OD: LEDGER FEE"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-109",
                    "currency": "ZAR"
                  },
                  "reference": "MONTHLY ACC FEE SEE CHARGE STATEMENT DETAIL"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-38000",
                    "currency": "ZAR"
                  },
                  "reference": "EXT STOP ORDER TO FIRSTRAND Salary Transfer FNB"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-700",
                    "currency": "ZAR"
                  },
                  "reference": "EXT STOP ORDER TO NEDBANK parking"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-135",
                    "currency": "ZAR"
                  },
                  "reference": "INTERNET BANK FEE"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-1800",
                    "currency": "ZAR"
                  },
                  "reference": "EXT STOP ORDER TO NEDBANK Housekeeper"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "38693.39",
                    "currency": "ZAR"
                  },
                  "reference": "ACB CREDIT Work Identity - Salary"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-53",
                    "currency": "ZAR"
                  },
                  "reference": "ACB DEBIT:INTERNAL (EFFEC 25012020) PAYMENT TO ACC4550270718667000"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-23.2",
                    "currency": "ZAR"
                  },
                  "reference": "REWARDS FEE 2001231607160004081m8A REWACBP"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-90",
                    "currency": "ZAR"
                  },
                  "reference": "POS PURCHASE (EFFEC 21012020) NU HEALTH CAFE (PTY) LTD GARDE CARD NO.  4616"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-28",
                    "currency": "ZAR"
                  },
                  "reference": "POS PURCHASE (EFFEC 21012020) NEW YORK BAGELS ZONNE CARD NO.  4616"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-1207.5",
                    "currency": "ZAR"
                  },
                  "reference": "OD: INITIATION FEE"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "0",
                    "currency": "ZAR"
                  },
                  "reference": "NOTIFIC FEE SMS     NOTIFYME 8 SMS NOTIFICATIONS"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-700",
                    "currency": "ZAR"
                  },
                  "reference": "INET IMMEDIATE PMT ABSA BANK parking 1604D8A75C"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "0",
                    "currency": "ZAR"
                  },
                  "reference": "NOTIFIC FEE SMS     NOTIFYME 5 SMS NOTIFICATIONS"
                }
              },
              {
                "node": {
                  "amount": {
                    "quantity": "-1700",
                    "currency": "ZAR"
                  },
                  "reference": "INET IMMEDIATE PMT ABSA BANK Housekeeper 1604D35E08"
                }
              }
            ]
          }
        }
      ]
    }
  }

      fetch('https://api.stitch.money/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: this.userTransactionsQuery,
          variables: {}
        }),
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.access_token}`
        }
      }).then((response) => response.json())
        .then((data) => {
          let stitchData = useStitchDataStore()

          const edges = data['user']['bankAccounts'][0]['transactions']['edges'];
          let val = edges.map(x=>x['node']['amount']['quantity'])
          let reference = edges.map(x=>x['node']['reference'])

          Object.assign(stitchData.refs, reference.filter((v, index) => index < 8));
          Object.assign(stitchData.salesData, val.filter((v, index) => index < 7));
          Object.assign(stitchData.generatedData, val.filter((v, index) => index < 6));
          Object.assign(stitchData.amounts, val.filter((v, index) => index < 8));
        }).catch((error) => {
          let stitchData = useStitchDataStore()
          
          const edges = mockData['user']['bankAccounts'][0]['transactions']['edges'];
          let val = edges.map(x=>x['node']['amount']['quantity'])
          let reference = edges.map(x=>x['node']['reference'])
          
          Object.assign(stitchData.refs, reference.filter((v, index) => index < 8));
          Object.assign(stitchData.amounts, val.filter((v, index) => index < 8));
          Object.assign(stitchData.salesData, val.filter((v, index) => index < 7));
          Object.assign(stitchData.generatedData, val.filter((v, index) => index < 6));
        })
    },
  },
  setup() {
    return {
      toolbarWidthFluid,
    };
  },
});
</script>
