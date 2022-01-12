<template>
    <div class="popup">
        <transition name="fade">
            <span class="popuptext" v-show="isPopup" :style="popupStyle">
            {{popupText}}
            </span>
        </transition>
        <input
            @focus="isPopup=true"
            @blur="inputBlur"
            :type="inputType"
            :value="value"
            @input="$emit('input', $event.target.value)"
            required="required"
            aria-required="true"
            :placeholder="placeholder"
          >
        </div>
</template>

<script>
export default {
    props: {
        popupStyle: String,
        popupText: {
            type: String,
            required: true
        },
        inputType: {
            type: String,
            default: 'text'
        },
        value: String,
        placeholder: String,
        localStorageDataCacheKey: String
    },
    methods: {
        inputBlur($event) {
            if (this.localStorageDataCacheKey)
                localStorage.setItem(this.localStorageDataCacheKey, $event.target.value);

            this.isPopup=false;
            this.$emit('blurInput', $event.target.value);
        }
    },
    data() {
        return {
            isPopup: false
        }
    }
}
</script>
