---
title: Slot
index: Framework.Vue.Practice
---

[[toc]]

### slot 嵌套

``` html
<slot name="footer">
  <ILine />
  <div class="py-3 px-5">
    <IFlexRow horizontal="end" class="gap-2">
      <slot name="footer-rest"></slot>
      <slot name="footer-cancel-button">
        <IButton size="sm" class="ml-2" @click="handleCancel">
          <slot name="footer-cancel-button-name">
            Cancel
          </slot>
        </IButton>
      </slot>
      <slot name="footer-confirm-button">
        <IButton type="primary" size="sm" class="ml-2" @click="handleConfirm">
          <slot name="footer-confirm-button-name">
            Confirm
          </slot>
        </IButton>
      </slot>
    </IFlexRow>
  </div>
</slot>

<!-- use -->
<IModal :visible="visible" title="你好吗" @close="toggleVisible">
  <p>你好啊</p>

  <template #footer-rest>
    <ICheckbox>
      可选条件
    </ICheckbox>
  </template>

  <template #footer-cancel-button-name>
    取消
  </template>

  <template #footer-confirm-button>
    <IButton color="red" size="sm" type="primary">删除</IButton>
  </template>
</IModal>
```


### 传参