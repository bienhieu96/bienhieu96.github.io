import React from "react";

// import { ContainerSettings } from './ContainerSettings';
import parse from "html-react-parser";
import { useNode } from "@craftjs/core";

export type CustomHTMLProps = {
  //   background: Record<'r' | 'g' | 'b' | 'a', number>;
  //   color: Record<'r' | 'g' | 'b' | 'a', number>;
  //   flexDirection: string;
  //   alignItems: string;
  //   justifyContent: string;
  //   fillSpace: string;
  //   width: string;
  //   height: string;
  //   padding: string[];
  //   margin: string[];
  //   marginTop: number;
  //   marginLeft: number;
  //   marginBottom: number;
  //   marginRight: number;
  //   shadow: number;
  //   children: React.ReactNode;
  //   radius: number;
  html: string;
};

const defaultProps = {
  html: `
        <div className="flex flex-col w-full bg-white rounded-lg p-4 gap-4">
          <div className="font-bold text-xl">Mô tả sản phẩm</div>
          <ul className="list-disc px-6 text-sm">
            <li>
              Bánh C'est Bon Sợi Thịt Gà Sốt Kem, nay hot hơn với vị mới TRỨNG
              LAVA - SỐT KEM TRỨNG MUỐI CHẢY
            </li>
            <li>
              {" "}
              Dinh dưỡng từ sợi thịt gà, nay thêm dinh dưỡng từ sốt kem trứng
              Lava, cho bữa sáng đầy đủ dinh dưỡng, Sản phẩm còn bổ sung 20% Canxi
              nhu cầu hàng ngày.
            </li>
            <li>
              Gói lớn hơn, khối lượng nhiều hơn, giá rẻ hơn kết hợp với thiết kế
              bao bì nổi bật, đem đến bữa sáng ngon miệng cho người tiêu dùng.
            </li>
            <li>Trọng lượng: 20.3g x 8 pack.</li>
          </ul>
          <div className="text-sm text-red-500">
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </div>
  `,
};

export const CustomHTML = (props: Partial<CustomHTMLProps>) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  props = {
    ...defaultProps,
    ...props,
  };
  const { html } = props;
  return <div ref={connect} style={{width: 'auto', height: "auto"}}>{parse(html)}</div>;
};

CustomHTML.craft = {
  displayName: "Custom Code",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    // toolbar: ContainerSettings,
  },
};
