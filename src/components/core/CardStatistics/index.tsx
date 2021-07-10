import { nanoid } from 'nanoid'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as S from './styles'

interface Statistics {
  label: string
  total: number
}

interface CardStatisticsProps {
  statistics: Statistics[]
}

export const CardStatistics = ({ statistics }: CardStatisticsProps) => {
  return (
    <S.Container>
      <Swiper spaceBetween={32} slidesPerView={1}>
        {statistics.map((statistic) => (
          <SwiperSlide key={nanoid()}>
            <S.CardBox>
              <S.Label>{statistic.label}</S.Label>
              <S.Count>{statistic.total}</S.Count>
            </S.CardBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  )
}
