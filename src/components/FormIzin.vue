<template>
    <div class="card border-0 rounded shadow p-0">
      <div class="card-body">
          <h5 class="font-weight-bold text-center sm-text-left">{{ title }}</h5>
          <hr>
          <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Karyawan</label>
                <select class="form-control" name="select" id="">
                    <option value="">Pilih Karyawan</option>
                    <option value="">2</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Jenis Izin</label>
                <select class="form-control" name="select" id="">
                    <option value="">Pilih Jenis Izin</option>
                    <option value="">2</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Tanggal awal Izin</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Tanggal akhir Izin</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Keterangan</label>
                <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
            </div>
         </form>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'FormIzinComponent', 
        props: ['title']
    }
</script>