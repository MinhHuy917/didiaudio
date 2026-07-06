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

// Giữ nguyên các import ảnh của bạn
import imgAbout1 from '/src/images/loajblpartyboxstage320/0.png'
import imgAbout2 from '/src/images/loajblpartyboxencore2/0.png'
import imgAbout3 from '/src/images/loajblpartyboxstage320/2.png'

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
              className="font-display text-base font-semibold  before:content-['/_'] text-white after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
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
    <Section title="Khởi nguồn đam mê âm thanh" image={{ src: imgAbout1 }}>
      <div className="space-y-6 text-base text-white">
        <p>
          Trong mỗi cuộc vui tại Đà Nẵng, từ những buổi picnic trên bán đảo Sơn Trà đến những bữa tiệc BBQ bên bờ biển Mỹ Khê, âm nhạc luôn là sợi dây gắn kết mọi người. Tuy nhiên, việc sở hữu và bảo trì một dàn âm thanh chất lượng không phải lúc nào cũng thuận tiện.
        </p>
        <p>
          <strong>ĐiĐi Audio</strong> ra đời từ mong muốn mang lại giải pháp giải trí di động hoàn hảo. Chúng tôi thấu hiểu rằng khách hàng cần một dịch vụ <em>thuê loa kéo Đà Nẵng</em> nhanh chóng, thiết bị phải luôn trong tình trạng tốt nhất để cuộc vui không bị gián đoạn.
        </p>
        <p>
          Chúng tôi tin rằng âm nhạc chất lượng không nên là một sự xa xỉ. Chỉ với một cuộc gọi, bạn sẽ có ngay dàn âm thanh chuyên nghiệp để cháy hết mình cùng bạn bè và người thân.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-white">
        Triết lý dịch vụ của chúng tôi
      </h3>
      <TagList className="mt-4">
        <TagListItem>Âm thanh trung thực, sống động</TagListItem>
        <TagListItem>Thiết bị đời mới, hoạt động ổn định</TagListItem>
        <TagListItem>Kết nối Bluetooth 5.0 nhanh chóng</TagListItem>
        <TagListItem>Hỗ trợ kỹ thuật tận tâm 24/7</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Hệ thống loa kéo chuyên nghiệp" image={{ src: imgAbout2, shape: 1 }}>
      <div className="space-y-6 text-base text-white">
        <p>
          Tại ĐiĐi Audio, chúng tôi cung cấp đa dạng các dòng <strong>loa kéo cho thuê tại Đà Nẵng</strong>, từ những mẫu loa cầm tay nhỏ gọn cho hội thảo đến những dàn loa công suất lớn phục vụ tiệc cưới, sinh nhật hay sự kiện ngoài trời.
        </p>
        <p>
          Mỗi bộ thiết bị bao gồm đầy đủ 2 micro không dây cao cấp, sạc pin dự phòng và dây kết nối cần thiết. Chúng tôi ưu tiên lựa chọn các thương hiệu âm thanh danh tiếng để đảm bảo độ vang, độ ấm và khả năng chống hú tuyệt vời.
        </p>
        <p>
          Sự chỉn chu thể hiện ở việc chúng tôi luôn sạc đầy pin và kiểm tra chất lượng âm thanh kỹ lưỡng trước khi bàn giao cho khách hàng. Với ĐiĐi Audio, chất lượng thiết bị là danh dự của chúng tôi.
        </p>
      </div>

    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Giao hàng siêu tốc & Hỗ trợ tận nơi" image={{ src: imgAbout3, shape: 2 }}>
      <div className="space-y-6 text-base text-white">
        <p>
          Hiểu được tính chất của các bữa tiệc, dịch vụ <strong>cho thuê loa di động Đà Nẵng</strong> của chúng tôi cam kết giao hàng siêu tốc chỉ trong 30 phút. Dù bạn ở Hải Châu, Thanh Khê, Sơn Trà hay bất cứ đâu tại Đà Nẵng, âm nhạc sẽ luôn đến đúng lúc.
        </p>
        <p>
          Sau mỗi lần khách sử dụng, toàn bộ thiết bị và đặc biệt là micro đều được vệ sinh, khử khuẩn sạch sẽ. Đây là tiêu chuẩn bắt buộc tại ĐiĐi Audio để đảm bảo an toàn và trải nghiệm tốt nhất cho người dùng tiếp theo.
        </p>
        <p>
          Đội ngũ kỹ thuật của chúng tôi luôn sẵn sàng hỗ trợ bạn setup, hướng dẫn chỉnh âm thanh sao cho phù hợp nhất với không gian và giọng hát của từng người.
        </p>
      </div>

     
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
        title="Âm thanh dẫn lối cảm xúc, gắn kết mọi niềm vui"
      >
        <p className='text-white'>
          Tại ĐiĐi Audio, chúng tôi không chỉ cho thuê thiết bị, chúng tôi mang đến giải pháp kết nối mọi người thông qua âm nhạc đỉnh cao tại Đà Nẵng.
        </p>
      </SectionIntro>

      <Container className="mt-24 text-white">
        <GridList>
          <GridListItem title="Uy tín hàng đầu">
            Cung cấp dịch vụ thuê loa kéo chuyên nghiệp nhất tại khu vực Đà Nẵng.
          </GridListItem>
          <GridListItem title="Thiết bị hiện đại">
            Luôn cập nhật những mẫu loa kéo, loa bluetooth đời mới nhất thị trường.
          </GridListItem>
          <GridListItem title="Phục vụ tận tâm">
            Hỗ trợ khách hàng nhiệt tình từ khâu chọn loa đến khi kết thúc buổi tiệc.
          </GridListItem>
          <GridListItem title="Giá thuê cạnh tranh">
            Mức giá thuê loa kéo tốt nhất Đà Nẵng đi kèm chất lượng vượt trội.
          </GridListItem>
          <GridListItem title="Linh hoạt thời gian">
            Cho thuê theo giờ hoặc theo ngày tùy theo nhu cầu thực tế của khách hàng.
          </GridListItem>
          <GridListItem title="Kết nối nhanh chóng">
            Thủ tục thuê đơn giản, nhanh gọn, hỗ trợ ship loa tận nơi 24/7.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Thuê loa kéo Đà Nẵng giá rẻ - Cho thuê loa âm thanh chuyên nghiệp',
  description: 'Dịch vụ cho thuê loa kéo Đà Nẵng uy tín, giao nhanh 30 phút. Loa kéo công suất lớn, âm thanh cực hay, micro không dây cao cấp. Thuê loa bluetooth, loa sự kiện giá tốt tại ĐiĐi Audio.',
}

export default function Aboutdidiaudio() {
  return (
    <>
      <PageIntro eyebrow="Giới thiệu về ĐiĐi Audio" title="Dịch vụ cho thuê loa kéo Đà Nẵng uy tín, chuyên nghiệp">
        <p className='text-white'>
          Chào mừng bạn đến với ĐiĐi Audio – đơn vị hàng đầu chuyên cung cấp giải pháp <strong>cho thuê loa âm thanh tại Đà Nẵng</strong>. Chúng tôi đồng hành cùng bạn trong mọi sự kiện, từ party gia đình, picnic ngoài trời đến các buổi hội thảo chuyên nghiệp với thiết bị hiện đại và dịch vụ tận tâm.
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