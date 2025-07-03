import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Terminal } from 'lucide-react';
import { constants } from 'node:buffer';
import { TriangleAlert } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ubah data',
        href: '/Latihan/halaman-ubah',
    },
];

interface Data {
    id: number,
    nama: string,
    deskripsi: string
}

interface Props{
    dataupdate: Data
}

export default function Ubah_data({dataupdate} : Props) {

    const {data, setData, put, processing, errors} = useForm({
        nama: dataupdate.nama,
        deskripsi: dataupdate.deskripsi
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //post(route('Latihan-tambah'));
        //console.log(data);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ubah Data" />
            <div className='w-8/12 p-4'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    {/* Display error */}

                    {Object.keys(errors).length > 0 &&(
                        <Alert>
                        <TriangleAlert />
                        <AlertTitle>Errors!</AlertTitle>
                        <AlertDescription>
                            <ul>
                                {Object.entries(errors).map(([key, message])=>(
                                    <li key={key}>{message as string}</li>
                                ))}
                            </ul>
                        </AlertDescription>
                        </Alert>
                    )}
                    <div>
                        <Label htmlFor='Nama'>Nama</Label>
                        <Input className='bg-gray-200' placeholder='Nama' value={data.nama} onChange={(e) => setData('nama', e.target.value)}></Input>
                    </div>
                    <div>
                        <Label htmlFor='Deskripsi'>Deskripsi</Label>
                        <Textarea className='bg-gray-200' placeholder='Deskripsi' value={data.deskripsi} onChange={(e) => setData('deskripsi', e.target.value)}></Textarea>                        
                    </div>
                    <div>
                        <Button>Ubah data</Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
