import React, { useEffect, useContext } from 'react'

import './../styles/generateTurn.css'
import { StoreContext } from './../store/Store'
import { ItemSite } from './../components/ItemSite'
import { ReCaptcha } from './../components/ReCaptcha'
import { Button } from './../components/Button'
import ImgInfo from './../../assets/img/img-info.svg'

const GenerateTurn = () => {
  const { setPositionStep } = useContext(StoreContext)

  const handleClickGeneratePdf = () => {
    var api_endpoint = 'https://selectpdf.com/api2/convert/'
    var api_key = 'd52de7b3-74b3-42b2-8d25-8fb6c85e8fc1'

    var url = window.location.href // current page

    var params = {
      key: api_key,
      url: url
    }

    var xhr = new XMLHttpRequest()
    xhr.open('POST', api_endpoint, true)
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.responseType = 'arraybuffer'

    xhr.onload = function (e) {
      if (this.status == 200) {
        //console.log('Conversion to PDF completed ok.');

        var blob = new Blob([this.response], { type: 'application/pdf' })
        var url = window.URL || window.webkitURL
        var fileURL = url.createObjectURL(blob)
        //window.location.href = fileURL;

        //console.log('File url: ' + fileURL);

        var fileName = 'Document.pdf'

        if (navigator.appVersion.toString().indexOf('.NET') > 0) {
          // This is for IE browsers, as the alternative does not work
          window.navigator.msSaveBlob(blob, fileName)
        } else {
          // This is for Chrome, Firefox, etc.
          var a = document.createElement('a')
          document.body.appendChild(a)
          a.style = 'display: none'
          a.href = fileURL
          a.download = fileName
          a.click()
        }
      } else {
        console.log('An error occurred during conversion to PDF: ' + this.status)
        // alert('An error occurred during conversion to PDF.\nStatus code: ' + this.status + ', Error: ' + String.fromCharCode.apply(null, new Uint8Array(this.response)))
      }
    }

    xhr.send(JSON.stringify(params))
  }

  useEffect(() => {
    setPositionStep(3)
  }, [])

  return (
    <div className='generate-turn'>
      <div className='generate-turn__info'>
        <h1>Verifica tu información.</h1>

        <section className='generate-turn__data'>
          <h2>
            Jhonatan Andres <br /> Mideros Narvaez
          </h2>
          <span>Cc. 1085254365</span>
        </section>

        <h3>Consulta externa</h3>

        <ItemSite onlyText={true} />

        <div className='mt-4 mb-12'>
          <ReCaptcha />
        </div>

        <Button type='button' text='Aceptar' classStyle='button-primary' eventOnClick={handleClickGeneratePdf} />
      </div>

      <div className='generate-turn__img'>
        <img src={ImgInfo} alt='generate-turn' />
      </div>
    </div>
  )
}

export { GenerateTurn }
