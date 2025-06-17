import { countAtom } from "@/store/jotai";
import { useAtomValue } from "jotai"

export default function ReadOnlyFunc() {
    const count = useAtomValue(countAtom); // 값만 읽음
    console.log('ReadOnly 렌더링');
    return <div>Count: {count}</div>;
}