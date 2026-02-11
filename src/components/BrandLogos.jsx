import React from 'react';
import { InfiniteSlider } from './InfiniteSlider';
import {
    CloudLightning,
    Globe,
    Layers,
    Cpu,
    Database,
    Server,
    Wifi,
    BarChart,
    Command
} from 'lucide-react';

export function BrandLogos() {
    return (
        <section className="py-20 bg-neutral-900 border-t border-neutral-800">
            <h3 className="text-center text-neutral-500 text-sm uppercase tracking-wider mb-10">
                Trusted by innovative teams worldwide
            </h3>
            <InfiniteSlider gap={60} duration={30}>
                <LogoPlaceholder icon={<CloudLightning />} name="ThunderSoft" />
                <LogoPlaceholder icon={<Globe />} name="GlobalTech" />
                <LogoPlaceholder icon={<Layers />} name="LayerStack" />
                <LogoPlaceholder icon={<Cpu />} name="ChipSet" />
                <LogoPlaceholder icon={<Database />} name="DataFlow" />
                <LogoPlaceholder icon={<Server />} name="ServerX" />
                <LogoPlaceholder icon={<Wifi />} name="NetConnect" />
                <LogoPlaceholder icon={<BarChart />} name="MetricsInc" />
                <LogoPlaceholder icon={<Command />} name="CmdLine" />
            </InfiniteSlider>
        </section>
    );
}

// Helper for logo placeholder since user didn't have the SVGs
function LogoPlaceholder({ icon, name }) {
    return (
        <div className="flex items-center gap-3 text-neutral-400 text-md px-4 opacity-70 hover:opacity-100 transition-opacity">
            {React.cloneElement(icon, { size: 32 })}
            <span>{name}</span>
        </div>
    );
}

export default BrandLogos;
