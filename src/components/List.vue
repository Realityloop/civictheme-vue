<template>
  <div :class="`ct-list ${themeClass}`">
    <div class="ct-list__container">
      <div
        v-if="title"
        class="ct-list__header container"
      >
        <div class="ct-list__header-title">
          <div class="container">
            <div class="row">
              <div class="col-xxs-12">
                <h2
                  :class="`ct-heading ${themeClass}`"
                  v-text="title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- @TODO - Filters -->
      <!-- <div class="ct-list__filters">
        <div
          :class="`ct-group-filter ${themeClass}`"
          data-component-name="ct-group-filter"
          data-group-filter-theme="light"
        >
          <button
            :class="`
              ct-button ${themeClass}
              ct-button--button ct-button--regular
              ct-group-filter__mobile-toggle
              hide-m
            `"
            data-component-name="button"
            data-group-filter-mobile-toggle=""
            data-flyout-open-trigger=""
            data-flyout-target=".ct-group-filter-flyout"
            data-allow-event-bubble=""
            data-button="true"
          >
            Filter
            <span class="ct-button__icon">
              <span
                class="
                  ct-icon ct-icon--userinterface_filteron ct-icon--size-small
                "
              ></span>
            </span>
          </button>
          <div
            class="
              ct-group-filter__mobile-toggle-display
              ct-group-filter__mobile-toggle-display--hidden
              hide-m
            "
            data-group-filter-mobile-toggle-display=""
            data-group-filter-mobile-toggle-display-suffix="%7B%221%22%3A%20%22filter%20applied%22%2C%20%22default%22%3A%20%22filters%20applied%22%7D"
          ></div>
          <div
            class="ct-group-filter-flyout hide-m"
            data-group-filter-mobile-overlay=""
            data-flyout="true"
            data-flyout-direction="right"
          >
            <div class="ct-group-filter__mobile-overlay" data-flyout-panel="">
              <div class="ct-mobile-navigation-close">
                <button
                  class="
                    ct-button ${themeClass}
                    ct-button--button ct-button--small
                    ct-mobile-navigation-close__button
                    ct-group-filter__mobile-cancel
                  "
                  data-component-name="button"
                  data-flyout-close-all-trigger=""
                  data-group-filter-mobile-cancel=""
                  data-button="true"
                >
                  Cancel
                  <span class="ct-button__icon">
                    <span
                      class="
                        ct-icon ct-icon--userinterface_close ct-icon--size-small
                      "
                    ></span>
                  </span>
                </button>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-xxs-12">
                    <div class="ct-group-filter__mobile-selected-filters">
                      <h2 class="ct-group-filter__mobile-filter-title">
                        Filter search results by:
                      </h2>
                      <div
                        class="ct-group-filter__selected-filters--hidden"
                        data-group-filter-mobile-selected-filters=""
                      >
                        <div
                          class="ct-group-filter__mobile-clear-container"
                          data-group-filter-mobile-clear-container=""
                        ></div>
                        <div
                          class="ct-group-filter__mobile-tags"
                          data-group-filter-mobile-tags-container=""
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="ct-group-filter__mobile-container"
                data-group-filter-mobile-container=""
              ></div>
              <div class="container ct-group-filter__mobile-apply-container">
                <button
                  class="
                    ct-button ${themeClass}
                    ct-button--primary ct-button--button ct-button--regular
                    ct-group-filter__mobile-apply
                  "
                  data-component-name="button"
                  data-flyout-close-all-trigger=""
                  data-flyout-trigger-allow-default=""
                  data-button="true"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div
            class="ct-group-filter__desktop-container"
            data-group-filter-desktop-container=""
          >
            <div class="container" data-group-filter-element="">
              <div class="row">
                <div class="col-xxs-12">
                  <fieldset
                    class="ct-group-filter__filters"
                    data-group-filter-filters=""
                  >
                    <legend class="hide-xxs show-m">
                      Filter search results by:
                    </legend>

                    <div
                      class="ct-dropdown-filter ${themeClass}"
                      data-collapsible="true"
                      data-collapsible-collapsed=""
                      data-collapsible-group="filter_group"
                      data-collapsible-duration="0"
                      data-component-name="ct-dropdown-filter"
                    >
                      <button
                        class="ct-dropdown-filter__filter-text"
                        data-collapsible-trigger=""
                      >
                        Filter text 1 et
                      </button>
                      <div
                        class="ct-dropdown-filter__filter-options"
                        data-collapsible-panel=""
                      >
                        <div class="ct-dropdown-filter__filter-options-wrapper">
                          <fieldset
                            class="
                              ct-fieldset ct-form-element ${themeClass}
                              ct-form-element--checkbox
                              ct-dropdown-filter__fieldset
                            "
                          >
                            <legend class="ct-label">
                              <span>Options title (optional)</span>
                            </legend>

                            <div class="ct-fieldset__wrapper">
                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--checkbox
                                  ct-form-element--label--undefined
                                  ct-form-element--label--after
                                "
                              >
                                <div class="ct-checkbox ${themeClass}">
                                  <input
                                    type="checkbox"
                                    class="ct-checkbox__element"
                                    value="nostrud"
                                    id="form-element-0"
                                    name="fug"
                                  />
                                  <span class="ct-checkbox__state"></span>
                                </div>

                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-0"
                                >
                                  Input title 1 adi
                                </label>
                              </div>

                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--checkbox
                                  ct-form-element--label--undefined
                                  ct-form-element--label--after
                                "
                              >
                                <div class="ct-checkbox ${themeClass}">
                                  <input
                                    type="checkbox"
                                    class="ct-checkbox__element"
                                    value="in du"
                                    id="form-element-1"
                                    name="pariat"
                                  />
                                  <span class="ct-checkbox__state"></span>
                                </div>

                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-1"
                                >
                                  Input title 2 ali
                                </label>
                              </div>

                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--checkbox
                                  ct-form-element--label--undefined
                                  ct-form-element--label--after
                                "
                              >
                                <div class="ct-checkbox ${themeClass}">
                                  <input
                                    type="checkbox"
                                    class="ct-checkbox__element"
                                    value="vo"
                                    id="form-element-2"
                                    name="cupi"
                                  />
                                  <span class="ct-checkbox__state"></span>
                                </div>

                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-2"
                                >
                                  Input title 3 tem
                                </label>
                              </div>

                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--checkbox
                                  ct-form-element--label--undefined
                                  ct-form-element--label--after
                                "
                              >
                                <div class="ct-checkbox ${themeClass}">
                                  <input
                                    type="checkbox"
                                    class="ct-checkbox__element"
                                    value="sit Lo"
                                    id="form-element-3"
                                    name="commo"
                                  />
                                  <span class="ct-checkbox__state"></span>
                                </div>

                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-3"
                                >
                                  Input title 4 el
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>

                    <div
                      class="ct-dropdown-filter ${themeClass}"
                      data-collapsible="true"
                      data-collapsible-collapsed=""
                      data-collapsible-group="filter_group"
                      data-collapsible-duration="0"
                      data-component-name="ct-dropdown-filter"
                    >
                      <button
                        class="ct-dropdown-filter__filter-text"
                        data-collapsible-trigger=""
                      >
                        Filter text 2 inc
                      </button>
                      <div
                        class="ct-dropdown-filter__filter-options"
                        data-collapsible-panel=""
                      >
                        <div class="ct-dropdown-filter__filter-options-wrapper">
                          <fieldset
                            class="
                              ct-fieldset ct-form-element ${themeClass}
                              ct-form-element--default
                              ct-dropdown-filter__fieldset
                            "
                          >
                            <legend class="ct-label">
                              <span>Options title (optional)</span>
                            </legend>

                            <div class="ct-fieldset__wrapper">
                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--label--undefined
                                  ct-form-element--label--before
                                "
                              >
                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-4"
                                >
                                  Input title 5 sun
                                </label>
                              </div>

                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--label--undefined
                                  ct-form-element--label--before
                                "
                              >
                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-5"
                                >
                                  Input title 6 ulla
                                </label>
                              </div>

                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--label--undefined
                                  ct-form-element--label--before
                                "
                              >
                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-6"
                                >
                                  Input title 7 ut
                                </label>
                              </div>

                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--label--undefined
                                  ct-form-element--label--before
                                "
                              >
                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-7"
                                >
                                  Input title 8 nis
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>

                    <div
                      class="ct-dropdown-filter ${themeClass}"
                      data-collapsible="true"
                      data-collapsible-collapsed=""
                      data-collapsible-group="filter_group"
                      data-collapsible-duration="0"
                      data-component-name="ct-dropdown-filter"
                    >
                      <button
                        class="ct-dropdown-filter__filter-text"
                        data-collapsible-trigger=""
                      >
                        Filter text 3 est
                      </button>
                      <div
                        class="ct-dropdown-filter__filter-options"
                        data-collapsible-panel=""
                      >
                        <div class="ct-dropdown-filter__filter-options-wrapper">
                          <fieldset
                            class="
                              ct-fieldset ct-form-element ${themeClass}
                              ct-form-element--default
                              ct-dropdown-filter__fieldset
                            "
                          >
                            <div class="ct-fieldset__wrapper">
                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--label--undefined
                                  ct-form-element--label--before
                                "
                              >
                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-8"
                                >
                                  Input title 9 ut
                                </label>
                              </div>

                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--label--undefined
                                  ct-form-element--label--before
                                "
                              >
                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-9"
                                >
                                  Input title 10 in u
                                </label>
                              </div>

                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--label--undefined
                                  ct-form-element--label--before
                                "
                              >
                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-10"
                                >
                                  Input title 11 null
                                </label>
                              </div>

                              <div
                                class="
                                  ct-form-element ${themeClass}
                                  ct-form-element--label--undefined
                                  ct-form-element--label--before
                                "
                              >
                                <label
                                  class="
                                    ct-label ${themeClass}
                                    ct-label--regular
                                  "
                                  for="form-element-11"
                                >
                                  Input title 12 dese
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div
                    class="
                      ct-group-filter__selected-filters
                      ct-group-filter__selected-filters--hidden
                    "
                    data-group-filter-selected-filters=""
                  >
                    <span
                      id="ct-group-filter-tags-title"
                      class="ct-group-filter__selected-filters-title"
                    >
                      Selected filters:
                    </span>
                    <div data-group-filter-tags-container="">
                      <div
                        class="ct-group-filter__tags"
                        aria-labelledby="ct-group-filter-tags-title"
                        data-group-filter-tags=""
                      ></div>
                    </div>
                    <div
                      class="ct-group-filter__clear-container"
                      data-group-filter-clear-container=""
                    >
                      <button
                        class="
                          ct-button ${themeClass}
                          ct-button--secondary
                          ct-button--button
                          ct-button--small
                          ct-group-filter__clear-all
                        "
                        data-component-name="button"
                        data-group-filter-clear=""
                        data-button="true"
                      >
                        Clear all
                        <span class="ct-button__icon">
                          <span
                            class="
                              ct-icon ct-icon--close-outline ct-icon--size-small
                            "
                          ></span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="ct-list__body">
        <div
          class="ct-item-grid"
          aria-live="polite"
        >
          <div class="container">
            <div class="row">
              <div class="col-xxs-12">
                <div class="ct-item-grid__items">
                  <div class="row">
                    <div
                      v-for="item of items"
                      :key="item.id"
                      class="ct-item-grid__item col-xxs-12 col-m-4"
                    >
                      <slot
                        name="item"
                        :item="item"
                      >
                        <component
                          :is="itemComponent"
                          v-bind="item"
                        />
                      </slot>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- @TODO - Pager -->
      <!-- <div class="ct-list__results-below">
        <div class="container">
          <div class="row">
            <div class="ct-list__pager">
              <nav
                class="ct-pager ${themeClass}"
                role="navigation"
                aria-labelledby="ct-listing-demo"
              >
                <h4 id="ct-listing-demo" class="ct-visually-hidden">
                  Pagination
                </h4>

                <div class="ct-pager__items_per_page">
                  <label
                    class="
                      ct-label ${themeClass}
                      ct-label--regular
                      ${themeClass}
                    "
                  >
                    Items per page
                  </label>

                  <select
                    class="
                      ct-select
                      ct-input__element
                      ${themeClass}
                      ct-select--pager
                    "
                  >
                    <option value="10">10</option>
                    <option value="20" selected="selected">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>

                <ul class="ct-pager__items">
                  <li class="ct-pager__item ct-pager__item--previous">
                    <a
                      class="
                        ct-link ${themeClass}
                        ct-input--disabled
                        disabled
                        ct-pager__link
                      "
                      href="http://example.com/i331q"
                      disabled=""
                      title="Go to previous page"
                    >
                      <span
                        class="ct-icon ct-icon--left-arrow ct-icon--size-small"
                      ></span>

                      Previous
                    </a>
                  </li>

                  <li class="ct-pager__item ct-pager__item--active">
                    <a
                      class="
                        ct-link ${themeClass}
                        ct-link--active
                        ct-pager__link
                      "
                      href="http://example.com/qgxzag"
                      title="Current page"
                    >
                      1
                    </a>
                  </li>

                  <li class="ct-pager__item hide-xxs show-l">
                    <a
                      class="ct-link ${themeClass} ct-pager__link"
                      href="http://example.com/wdowq"
                      title="Go to page 2 of 5"
                    >
                      2
                    </a>
                  </li>
                  <li class="ct-pager__item hide-xxs show-l">
                    <a
                      class="ct-link ${themeClass} ct-pager__link"
                      href="http://example.com/ix981"
                      title="Go to page 3 of 5"
                    >
                      3
                    </a>
                  </li>
                  <li class="ct-pager__item hide-xxs show-l">
                    <a
                      class="ct-link ${themeClass} ct-pager__link"
                      href="http://example.com/c4foj"
                      title="Go to page 4 of 5"
                    >
                      4
                    </a>
                  </li>

                  <li class="ct-pager__item hide-xxs show-l">
                    <a
                      class="ct-link ${themeClass} ct-pager__link"
                      href="http://example.com/82icq"
                      title="Go to page 5 of 5"
                    >
                      5
                    </a>
                  </li>

                  <li class="ct-pager__item ct-pager__item--next">
                    <a
                      class="
                        ct-link ${themeClass}
                        ct-input--disabled
                        disabled
                        ct-pager__link
                      "
                      href="http://example.com/gc4t7"
                      disabled=""
                      title="Go to next page"
                    >
                      Next

                      <span
                        class="
                          ct-icon ct-icon--right-arrow-2 ct-icon--size-small
                        "
                      ></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import ThemeMixin from '../mixins/theme'

export default {
  mixins: [ThemeMixin],

  props: {
    itemComponent: {
      type: String,
      default: 'CTPromoCard'
    },
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: undefined
    }
  }
}
</script>
