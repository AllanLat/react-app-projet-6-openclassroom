import React from 'react'
import Erreur from '../../components/erreur/erreur'

export default function p404() {
  return (
    <Erreur type={'404'} message={'Oups! La page que vous demandez n\'existe pas.'} />
  )
}
