import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { CircleCheck, Terminal } from 'lucide-react';
import { Interface } from 'readline';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Training',
        href: '/training',
    },
];

interface latihanItem {
    id: number,
    nama: string,
    deskripsi: string,
}

interface PageProps {
  flash: {
    message?: string;
  };
  
  latihan: latihanItem[] // -> variabel latihan di samping harus sesuai dengan variabel di controller 

}

export default function Training() {
    const {latihan, flash} = usePage().props as PageProps;

    const {processing, delete:destroy} = useForm();

    const handleHapus = (id:number, nama:string) => {
        if(confirm(`Anda yakin akan menghapus ${id} - ${nama}` )){
            destroy(route("Hapus-data",id));
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Training" />
            <div className='m-4'>
                <div>
                {flash.message && (
                    <Alert>
                        <CircleCheck  />
                        <AlertTitle>Notifikasi!</AlertTitle>
                        <AlertDescription>
                            {flash.message}
                        </AlertDescription>
                    </Alert>
                )}
                </div>
            </div>
            <div className='m-4'>
                <Link href={route('Add-data')}>
                    <Button style={{ backgroundColor: 'black', color: 'white', width:'100px', height:'30px', borderRadius:'5px' }} >Add Data</Button>
                </Link>
            </div>
            {latihan.length > 0 ? (
            <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Deskripsi</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {latihan.map((item)=>(
                    <TableRow>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.nama}</TableCell>
                    <TableCell>{item.deskripsi}</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                    <TableCell className="text-center space-x-2">
                        <Link href={route('Ubah-data',item.id)}><Button  className='bg-slate-600 hover:bg-slate-800'>Ubah</Button></Link>
                        <Button disabled={processing} onClick={() => handleHapus(item.id, item.nama)} className='bg-red-600 hover:bg-red-800'>Hapus</Button>
                    </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
            ) : (

                <div>data kosong</div>
            )
            }                 
        </AppLayout>
    ); 
}
