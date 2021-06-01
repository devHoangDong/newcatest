import React from 'react';
import '../../scss/PageLoading.scss';
import { BoxLoading } from 'react-loadingg';
import { useSelector } from 'react-redux';

const FullPageLoading = () => {
  const loading = useSelector(store => store.loading.isLoading)
  return (
    <div className="pageLoading" style={{display: loading ? 'block' : 'none'}}>
      <BoxLoading />
    </div>
  )
}

export default FullPageLoading;
