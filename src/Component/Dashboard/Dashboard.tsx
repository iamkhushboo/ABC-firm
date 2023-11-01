import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './ProductService';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { Checkbox } from "primereact/checkbox";

const Dashboard = () => {

  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(null);

  useEffect(() => {
    ProductService.getProductsMini().then((data: any) => setProducts(data));
  }, []);

  const [visible, setVisible] = useState<boolean>(false);
  const footerContent = (
    <div>
      <Button className='footer-btn' label="Transcribe File" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  const customBase64Uploader = async (event: any) => {
    // convert file to base64 encoded
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
      const base64data = reader.result;
    };
  };

  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div>
      <div className="topheader d-flex justify-content-between p-3">
        <div className="searchbar">
          <input type='text' placeholder='Search Here...' />
        </div>
        <div className="profile d-flex justify-content-between">
          <i className='bi bi-bell'></i>
          <i className='bi bi-person-circle'></i>
        </div>
      </div>
      <div className="main-contant p-3">
        <div className="content">
          <div className="d-flex justify-content-between">
            <h3>Welcome Shakirat</h3>
            <Button label="Transcribe Files" icon="pi pi-external-link" onClick={() => setVisible(true)} />
          </div>
          <p>Upload your audio and video to convert to text</p>
        </div>
        <div className="dashboard-cards">
          <div className="row d-flex justify-content-around mb-3">
            <div className="col-4">
              <div className="card" style={{ width: '18rem;' }}>
                <div className="card-body">
                  <h5 className="card-title"><i className='bi bi-folder'></i></h5>
                  <p className="card-text">100</p>
                  <span>Uploaded Files</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card" style={{ width: '18rem;' }}>
                <div className="card-body">
                  <h5 className="card-title"><i className='bi bi-fonts'></i></h5>
                  <p className="card-text">50</p>
                  <span>Transcribed</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card" style={{ width: '18rem;' }}>
                <div className="card-body">
                  <h5 className="card-title"><i className='bi bi-bookmark'></i></h5>
                  <p className="card-text">20</p>
                  <span>Saved</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-table">
            <div className="card">
              <DataTable value={products} selection={selectedProducts} onSelectionChange={(e: any) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
      <div className="card flex justify-content-center">
        <Dialog header="Transcribe File" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
          <p className='mb-1'>Transcription Language</p>
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
            placeholder="Select a City" className="w-full md:w-14rem dialog-dropdown mb-2" />
          <div className="file mb-3">
            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept=".mp3,.mp4,.mp4" customUpload uploadHandler={customBase64Uploader} />
          </div>
          <p className='mb-1'>Import from Link</p>
          <input type='text' className='importLink mb-3' placeholder='Paste a Drobpox, Googlr Drive or Youtube URL here' /><br />
          <Checkbox onChange={(e: any) => setChecked(e.checked)} checked={checked}></Checkbox><span>Speaker indentification</span>
        </Dialog>
      </div>
    </div>
  )
}

export default Dashboard
