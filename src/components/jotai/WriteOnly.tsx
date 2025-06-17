import { countAtom } from "@/store/jotai";
import { useSetAtom } from "jotai"

export default function WriteOnlyFunc() {
    const increment = useSetAtom(countAtom); // 값은 읽지 않음
    console.log('WriteOnly 렌더링');
    return <button onClick={() => increment((prev) => prev + 1)}>+1</button>;
}