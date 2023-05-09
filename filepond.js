FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.setOptions({
  allowDrop: true,
  allowReplace: true,
  imagePreviewMinHeight: 50,
  imagePreviewMaxHeight: 150,
  instantUpload: false,
  dropOnPage: true,
  dropValidation: true,
  ignoredFiles: [".ds_store", "thumbs.db", "desktop.ini"],
  allowFileTypeValidation: true,
  acceptedFileTypes: ["image/jpg"],
  labelIdle:
    'Trascina e rilascia qui i tuoi file oppure <span class="filepond--label-action">Sfoglia</span>',
});

FilePond.registerPlugin(FilePondPluginImageTransform);
FilePond.parse(document.body);
// console.log(FilePond.getOptions());
