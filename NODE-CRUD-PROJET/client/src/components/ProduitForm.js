import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button } from 'antd'

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}

const ProduitForm = ({ id, produit, setProduit}) => {
  const navigate = useNavigate()
  const [values, setValues] = useState(null)

  useEffect(() => {
    setValues(produit)
    console.log(values)
  }, [produit, id])

  const onFinish = async values => {
    await window.fetch(`/api/produits/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(values)
    })

    console.log('Success:', values)
    setProduit(values)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const handleChange = event => {
    const { value, name } = event.target
    setValues({ ...values, [name]: value })
  }
 

  const handleDelete = async () => {
    await window.fetch(`/api/produits/${id}`, {
      method: 'DELETE'
    })

    navigate('/produits')
  }

  if (!values) return null

  return (
    <Form
      {...layout}
      name='basic'
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Nom'
        name='name'
        initialValue={values.name}
        rules={[
          {
            required: true,
            message: "Merci d'entrer le nom du produit."
          }
        ]}
      >
        <Input name='name' value={values.name} onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label='catégorie'
        name='category'
        initialValue={values.category}
        rules={[
          {
            required: true,
            message: "Merci d'entrer la catégorie du produit."
          }
        ]}
      >
        <Input name='category' value={values.category} onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label='stock'
        name='stock'
        initialValue={values.stock}
        rules={[
          {
            required: false
          }
        ]}
      >
        <Input
          value={values.stock}
          type='number'
          name='stock'
          onChange={handleChange}
        />
      </Form.Item>
      

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Valider
        </Button>
        <Button
          onClick={handleDelete}
          type='danger'
          style={{ marginLeft: '1rem' }}
        >
          Supprimer
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProduitForm

// remarques : code de formulaire copier de site ant/components/form/
//handlechange est une fonction générale qui marche avec toutes les input , c'est vraiment le sys de data puriment react qui qui moins long que les systémes ordinaire (il suffit qu 'on a le name)


