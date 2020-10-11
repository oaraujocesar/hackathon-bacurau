<template>
      <modal width="400" height="auto" styles="border-radius: 15px; text-align: center;" name="comment-modal">
          <div class="modal-header">
            
          </div>
          <div class="modal-body">
            <input type="text" placeholder="Título">
            <input type="text" placeholder="Tags #obesidade,#emagrecimento,#motivacao">
            <Textfield label="" control-type="textarea" placeholder="descrição" />
            <label for="public">
              <input type="checkbox" name="public" id="public">
              Público
            </label>
          </div>
          <div class="modal-footer">
            <span @click="hide">Cancelar</span>

            <div class="modal-btn">
              <Button label="Salvar" />
            </div>
          </div>
        </modal>
</template>

<script>
export default {

}
</script>

<style>

</style>