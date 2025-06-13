import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imgAbout1 from '@/images/about/imgAbout1.png'
import imgAbout3 from '@/images/about/imgAbout2.jpg'
import imgAbout2 from '@/images/about/imgAbout3.jpg'


function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start grayscale-0"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Khởi nguồn" image={{ src: imgAbout1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Có những ngày cuối tuần, chỉ cần rời thành phố một đoạn, dựng tạm chiếc lều bên suối mát hay dưới tán cây rừng, ta đã thấy lòng nhẹ tênh. Nhưng không phải ai cũng có đủ đồ nghề để bắt đầu.
        </p>
        <p>
          ĐiĐi Camping được sinh ra từ chính sự thiếu thốn nhỏ ấy – và cả mong muốn sẻ chia. Chúng tôi cho thuê những món đồ cần thiết để bạn không cần sắm sửa vội vàng: từ lều trại, bếp nướng đến đèn pin và túi ngủ.
        </p>
        <p>
          Chúng tôi tin rằng việc chuẩn bị cho một chuyến đi nên là phần thú vị, không phải là trở ngại. Và bạn xứng đáng có những khoảnh khắc thật đẹp với thiên nhiên, một cách gọn gàng và chỉn chu nhất.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Bao gồm trong giai đoạn này
      </h3>
      <TagList className="mt-4">
        <TagListItem>Lắng nghe nhu cầu thực tế</TagListItem>
        <TagListItem>Chọn lọc thiết bị dễ sử dụng</TagListItem>
        <TagListItem>Kiểm định độ an toàn và bền bỉ</TagListItem>
        <TagListItem>Tập trung vào trải nghiệm tối giản</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Dịch vụ cho thuê thiết bị" image={{ src: imgAbout2, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Từ một chiếc lều 2 người đến một bộ bàn ghế nhỏ gọn, từ bếp nướng than thơm lừng đến đèn lều nhẹ dịu trong đêm – tất cả đều có sẵn tại ĐiĐi Camping.
        </p>
        <p>
          Chúng tôi chuẩn bị sẵn sàng từng món đồ: sạch sẽ, đầy đủ phụ kiện, dễ sử dụng. Mỗi khách hàng khi nhận thiết bị đều cảm thấy như có người bạn thân đã lo chu toàn trước.
        </p>
        <p>
          Chúng tôi không chạy theo số lượng. Chúng tôi chọn sự chỉn chu. Vì một đêm ngoài trời không nên bắt đầu bằng việc thiếu dây buộc hay quên bếp gas. 
        </p>
      </div>

      <Blockquote
        author={{ name: 'Hoàng Nhật', role: 'Khách thuê thiết bị' }}
        className="mt-12"
      >
        Thiết bị đầy đủ, sạch sẽ, chất lượng tốt. Nhờ ĐiĐi Camping mà nhóm mình có buổi cắm trại đầu tiên rất suôn sẻ và vui vẻ!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Vận hành & chăm sóc" image={{ src: imgAbout3, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Khi bạn đặt thuê, chúng tôi không chỉ giao đồ. Chúng tôi chuẩn bị kỹ, kiểm tra từng bộ phận nhỏ, gấp gọn và sẵn sàng để bạn chỉ việc dùng.
        </p>
        <p>
          Sau mỗi lần sử dụng, đồ được vệ sinh sạch sẽ, phơi khô và kiểm tra kỹ lưỡng trước khi quay lại kho. Với chúng tôi, mỗi món đồ đều có một câu chuyện, một lần phục vụ – và cần được chăm chút đúng nghĩa.
        </p>
        <p>
          Chúng tôi làm việc như thể chính mình sẽ là người dùng tiếp theo. Sự chuyên nghiệp không nằm ở quy mô, mà ở từng chi tiết nhỏ được thực hiện nghiêm túc mỗi ngày.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Bao gồm trong giai đoạn này
      </h3>
      <List className="mt-8">
        <ListItem title="Thiết bị đã sẵn sàng">
          Không chỉ sạch, mà còn gọn – được chuẩn bị như thể hôm nay chính bạn sẽ lên đường.
        </ListItem>
        <ListItem title="Chăm sóc sau sử dụng">
          Không bỏ sót chi tiết nào – từ dây buộc, ống bơm, lưới chống muỗi… mọi món đều được kiểm tra kỹ lưỡng.
        </ListItem>
        <ListItem title="Hỗ trợ nhẹ nhàng, không gấp gáp">
          Chúng tôi luôn lắng nghe và trả lời tận tình – vì việc thuê thiết bị cũng cần sự tử tế.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Giá trị cốt lõi"
        title="Dụng cụ chỉ là phương tiện – cảm xúc mới là đích đến"
      >
        <p>
          Tại ĐiĐi Camping, mỗi thiết bị được chọn lựa không chỉ vì chức năng, mà còn vì cảm giác nó mang lại. Một đêm ngủ ngon trong lều ấm, một bữa tối bên bếp than đỏ lửa – tất cả bắt đầu từ sự chuẩn bị chỉnh chu.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Thật thà">
            Nói đúng khả năng, cho thuê đúng chất lượng – không hứa hẹn thừa.
          </GridListItem>
          <GridListItem title="Chỉn chu">
            Mỗi món đồ đều được gấp gọn, kiểm tra trước và sau khi thuê.
          </GridListItem>
          <GridListItem title="Thân thiện">
            Hỗ trợ nhẹ nhàng, không thúc ép, luôn sẵn sàng lắng nghe.
          </GridListItem>
          <GridListItem title="Chuyên tâm">
            Làm nghề bằng sự chăm chút – vì chúng tôi cũng yêu thiên nhiên như bạn.
          </GridListItem>
          <GridListItem title="Linh hoạt">
            Tùy vào nhu cầu, không áp đặt combo, không ràng buộc.
          </GridListItem>
          <GridListItem title="Trách nhiệm">
            Giao đúng giờ, đúng món, đúng như cam kết – để bạn yên tâm mà đi.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Cho thuê lều và thiết bị cắm trại tại Đà Nẵng | ĐiĐi Camping',
  description: 'Thuê lều trại, bàn ghế, bếp nướng, túi ngủ, đèn pin, thảm, tăng và hàng chục thiết bị dã ngoại khác tại ĐiĐi Camping. Thiết bị chỉn chu – phục vụ tận tâm – cảm xúc trọn vẹn.',
}

export default function AboutDiDiCamping() {
  return (
    <>
      <PageIntro eyebrow="Giới thiệu dịch vụ" title="ĐiĐi Camping – Thiết bị chỉn chu, cảm xúc trọn vẹn">
        <p>
        Mỗi chuyến đi bắt đầu bằng một hành trang gọn gàng. Với ĐiĐi Camping, bạn không chỉ thuê lều và thiết bị cắm trại tại Đà Nẵng – bạn mang theo sự an tâm, cảm hứng và tinh thần sẵn sàng cho những trải nghiệm giữa thiên nhiên.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />
    </>
  )
}
