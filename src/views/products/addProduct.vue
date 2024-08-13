<script>
import axios from 'axios'
export default {
  data() {
    return {
      product: {
        NameUz: "Navoiy Gul",
        NameRu: "Цветок Навои",
        CategoryId: 5,
        DescriptionUz: "Bu mahsulotning tavsifi",
        DescriptionRu: "Описание этого продукта",
        PriceSum: 100000.00,
        PriceUsd: 9,
        SeoUrl: "navoiy-gul",
        ItemOneUz: "Bir element",
        ItemOneRu: "Один элемент",
        ItemTwoUz: "Ikki element",
        ItemTwoRu: "Два элемента",
        ItemThreeUz: "Uch element",
        ItemThreeRu: "Три элемента",
        Images: [],
        Characteristics: [{
          nameUz: "string",
          descUz: "string",
          nameRu: "string",
          descRu: "string",
          productId: 0,
          createdAt: "2024-07-31T19:03:13.710Z"
        }, {
          nameUz: "string",
          descUz: "string",
          nameRu: "string",
          descRu: "string",
          productId: 0,
          createdAt: "2024-07-31T19:03:13.710Z"
        }]
                   
      }
    }
  }, 
  methods: {
    previewProjectImages(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.product.Images.push(files[i])

      }
      console.log(this.product.Images);
    },
    async createProduct() {
      const formData = new FormData();
        formData.append('NameUz', this.product.NameUz);
        formData.append('NameRu', this.product.NameRu);
        formData.append('CategoryId', this.product.CategoryId);
        formData.append('DescriptionUz', this.product.DescriptionUz);
        formData.append('DescriptionRu', this.product.DescriptionRu);
        formData.append('PriceSum', this.product.PriceSum);
        formData.append('PriceUsd', this.product.PriceUsd);
        formData.append('SeoUrl', this.product.SeoUrl);
        formData.append('ItemOneUz', this.product.ItemOneUz);
        formData.append('ItemOneRu', this.product.ItemOneRu);
        formData.append('ItemTwoUz', this.product.ItemTwoUz);
        formData.append('ItemTwoRu', this.product.ItemTwoRu);
        formData.append('ItemThreeUz', this.product.ItemThreeUz);
        formData.append('ItemThreeRu', this.product.ItemThreeRu);

       
        for (let i = 0; i < this.product.Images.length; i++) {
          formData.append('Images', this.product.Images[i]);
        }
        // for (let i = 0; i < this.product.Characteristics.length; i++) {
        //   formData.append('CharacteristicsList', this.product.Characteristics[i])
        // }

        formData.append('CharacteristicsList', JSON.stringify(this.product.Characteristics));
        try {
        console.log(this.product);
        let result = await axios.post('product/create', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        });

        if (result.status === 200) {
          alert('Product created successfully');
        }
      } catch (error) {
        console.log(error.message);
      }

    }
  }
}
</script>

<template lang="">
  <div class="col-lg-2"> </div> 
  <div class="col-lg-8">

 
                  <div class="card mb-4">
                    <h5 class="card-header">HTML5 Inputs</h5>
                    <div class="card-body">
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">NameUZ</label>
                        <div class="col-md-10">
                          <input v-model="product.NameUz" class="form-control" type="text"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">NameRU</label>
                        <div class="col-md-10">
                          <input v-model="product.NameRu" class="form-control" type="text"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">CategoryId</label>
                        <div class="col-md-10">
                          <input v-model="product.CategoryId" class="form-control" type="number"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">Desc UZ</label>
                        <div class="col-md-10">
                          <textarea v-model="product.DescriptionUz" class="form-control" type="text"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">Desc RU</label>
                        <div class="col-md-10">
                          <textarea v-model="product.DescriptionRu" class="form-control" type="text"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">Price Sum</label>
                        <div class="col-md-10">
                          <input v-model="product.PriceSum" class="form-control" type="number"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">Price Usd</label>
                        <div class="col-md-10">
                          <input v-model="product.PriceUsd"  class="form-control" type="number"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">ItemUz 1</label>
                        <div class="col-md-10">
                          <input  v-model="product.ItemOneUz" class="form-control" type="text"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">ItemRU 1</label>
                        <div class="col-md-10">
                          <input v-model="product.ItemOneRu" class="form-control" type="text"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">ItemUz 2</label>
                        <div class="col-md-10">
                          <input v-model="product.ItemTwoUz" class="form-control" type="text"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">ItemRU 2</label>
                        <div class="col-md-10">
                          <input  v-model="product.ItemTwoRu" class="form-control" type="text"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">ItemUz 3</label>
                        <div class="col-md-10">
                          <input v-model="product.ItemThreeUz" class="form-control" type="text"  />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">ItemRU 3</label>
                        <div class="col-md-10">
                          <input v-model="product.ItemThreeRu" class="form-control" type="text"  />
                        </div>
                      </div>
                      <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">Images</label>
                        <input @change="previewProjectImages" accept="image/*" ref="fileProjects" class="form-control" type="file"  multiple />
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-text-input" class="col-md-2">Characteristics</label>
                        <div class="col-md-10">
                          <textarea class="form-control" type="text"  />
                        </div>
                      </div>
                      <button @click="createProduct()" type="button" class="btn btn-primary">Create</button>
                    </div>
                  </div>
                  
                </div>
</template>

<style lang="">

</style>