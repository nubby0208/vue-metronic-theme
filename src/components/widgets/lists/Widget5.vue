<template>
  <!--begin::List Widget 5-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bold mb-2 text-dark">Activities</span>
        <span class="text-muted fw-semobold fs-7">890,344 Sales</span>
      </h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown1></Dropdown1>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-5">
      <!--begin::Timeline-->
      <div class="timeline-label">
        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">{{amounts[0]}}</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-warning fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Text-->
          <div class="fw-mormal timeline-content text-muted ps-3">
            {{refs[0]}}
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">{{amounts[1]}}</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-success fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Content-->
          <div class="timeline-content d-flex">
            <span class="fw-bold text-gray-800 ps-3">{{refs[1]}}</span>
          </div>
          <!--end::Content-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">{{amounts[2]}}</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-danger fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Desc-->
          <div class="timeline-content fw-bold text-gray-800 ps-3">
            {{refs[2]}}
          </div>
          <!--end::Desc-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">{{amounts[3]}}</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-primary fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Text-->
          <div class="timeline-content fw-mormal text-muted ps-3">
            {{refs[3]}}
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">{{amounts[4]}}</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-danger fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Desc-->
          <div class="timeline-content fw-semobold text-gray-800 ps-3">
            {{refs[4]}}
          </div>
          <!--end::Desc-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">{{amounts[5]}}</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-primary fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Text-->
          <div class="timeline-content fw-mormal text-muted ps-3">
            {{refs[5]}}
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">{{amounts[6]}}</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-danger fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Desc-->
          <div class="timeline-content fw-semobold text-gray-800 ps-3">
            {{refs[6]}}
          </div>
          <!--end::Desc-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">{{amounts[7]}}</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-success fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Text-->
          <div class="timeline-content fw-mormal text-muted ps-3">
            {{refs[7]}}
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->
      </div>
      <!--end::Timeline-->
    </div>
    <!--end: Card Body-->
  </div>
  <!--end: List Widget 5-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { useStitchDataStore } from '@/StitchData'

export default defineComponent({
  name: "kt-widget-5",
  props: {
    widgetClasses: String,
  },
  data: () => ({
    amounts: useStitchDataStore().amounts,
    refs: useStitchDataStore().refs,
  }),
  components: {
    Dropdown1,
  },
});
</script>
