'use client';
import { Button } from '@/components/ui/button';
import {
  FormItem,
  FormMessage,
  FormControl,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ALL_IN_PACKAGES, FIND_US, parseMessage } from '@/constant/config';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import * as React from 'react';
import * as Yup from 'yup';

export type TFormData = {
  nama: string;
  instagram: string;
  email: string;
  phone: string;
  paket: string;
  estimate_location: string;
  date: string;
  budget_range: string;
  find_us: string;
  why_us: string;
  time: string;
  message: string;
};

const SignInSchema = Yup.object().shape({
  nama: Yup.string().required('Email harus diisi'),
  instagram: Yup.string().required('Instagram harus diisi'),
  email: Yup.string().email().required('Email harus diisi'),
  phone: Yup.string().required('Nomor telepon harus diisi'),
  paket: Yup.string().required('Paket harus diisi'),
  estimate_location: Yup.string().required('Lokasi harus diisi'),
  date: Yup.string().required('Tanggal harus diisi'),
  budget_range: Yup.string().required('Range budget harus diisi'),
  find_us: Yup.string().required('Temukan kami harus diisi'),
  why_us: Yup.string().required('Alasan harus diisi'),
  message: Yup.string().required('Pesan harus diisi'),
  time: Yup.string().required('Waktu harus diisi'),
});

function IndexPage() {
  const initialValues = {
    nama: '',
    instagram: '',
    email: '',
    phone: '',
    paket: '',
    estimate_location: '',
    date: '',
    budget_range: 'Rp',
    find_us: 'Instagram',
    why_us: '',
    message: '',
    time: '',
  };

  const handleSubmit = (value: TFormData) => {
    // Encode the message
    const message = parseMessage(value);
    const encodedMessage = encodeURIComponent(message);
    const phone_no =
      process.env.NEXT_PUBLIC_DESTINATION_PHONE || '6285888074561';

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phone_no}?text=${encodedMessage}`;

    // Open the URL in a new window/tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='container mx-auto flex min-h-screen max-w-xl flex-col items-center py-6'>
      <div className='flex w-full flex-col space-y-4'>
        <div className='mb-3 flex flex-col justify-start'>
          <Image src='/assets/logo.png' alt='logo' width={150} height={100} />
        </div>
        <div className='my-5'>
          <h1 className='mb-2 text-3xl font-bold'>Get In Touch With Us </h1>
          <p>
            Setelah mengisi formulir di bawah ini, buka Whatsapp Anda untuk
            mendapatkan pricelist Fix Creative Photography dan dapatkan
            penawaran spesial dari kami!
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={SignInSchema}
          onSubmit={(Value, action) => {
            handleSubmit(Value);
            action.resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormItem className='my-4 space-y-4'>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nama}
                    name='nama'
                    className='py-5'
                    placeholder='Salsa'
                    autoComplete='off'
                  />
                </FormControl>
                {errors.nama && touched.nama && (
                  <FormMessage>{errors.nama}</FormMessage>
                )}
              </FormItem>

              <FormItem className='my-4 space-y-4'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name='email'
                    className='py-5'
                    placeholder='salsa@gmail.com'
                    autoComplete='off'
                  />
                </FormControl>
                {errors.email && touched.email && (
                  <FormMessage>{errors.email}</FormMessage>
                )}
              </FormItem>
              <FormItem className='my-4 space-y-4'>
                <FormLabel>No HP / Whatsapp</FormLabel>
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    name='phone'
                    className='py-5'
                    placeholder='62xxxxxxxxxx'
                  />
                </FormControl>
                {errors.phone && touched.phone && (
                  <FormMessage>{errors.phone}</FormMessage>
                )}
              </FormItem>
              <FormItem className='my-4 space-y-4'>
                <FormLabel>Veneu</FormLabel>
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.estimate_location}
                    name='estimate_location'
                    className='py-5'
                    placeholder='Rumah, Kantor, dll'
                    autoComplete='off'
                  />
                </FormControl>
                {errors.estimate_location && touched.estimate_location && (
                  <FormMessage>{errors.estimate_location}</FormMessage>
                )}
              </FormItem>
              <FormItem className='my-4 space-y-4'>
                <FormLabel>Waktu</FormLabel>
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.time}
                    name='time'
                    className='py-5'
                    placeholder='Cth: 10.00 - 14.00'
                    autoComplete='off'
                  />
                </FormControl>
                {errors.time && touched.time && (
                  <FormMessage>{errors.time}</FormMessage>
                )}
              </FormItem>
              <FormItem className='my-4 space-y-4'>
                <FormLabel>Instagram</FormLabel>
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.instagram}
                    name='instagram'
                    className='py-5'
                    placeholder='@salsa'
                  />
                </FormControl>
                {errors.instagram && touched.instagram && (
                  <FormMessage>{errors.instagram}</FormMessage>
                )}
              </FormItem>
              <FormItem className='my-4 space-y-4'>
                <FormLabel>Paket</FormLabel>
                <FormControl className='w-full'>
                  <Select
                    onValueChange={(e) => setFieldValue('paket', e)}
                    value={values.paket}
                    defaultValue={values.paket}
                    name='paket'
                  >
                    <SelectTrigger className='h-10 w-full'>
                      <SelectValue placeholder='Pilih Paket' />
                    </SelectTrigger>
                    <SelectContent className='w-full'>
                      <SelectGroup className='w-full'>
                        {ALL_IN_PACKAGES.map((value, index) => (
                          <SelectItem key={index} value={value.value}>
                            {value.value}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                {errors.paket && touched.paket && (
                  <FormMessage>{errors.paket}</FormMessage>
                )}
              </FormItem>
              <FormItem className='my-4 space-y-4'>
                <FormLabel>Estimasi Tanggal</FormLabel>
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                    name='date'
                    className='py-5'
                    placeholder='3 Mei 2024'
                  />
                </FormControl>
                {errors.date && touched.date && (
                  <FormMessage>{errors.date}</FormMessage>
                )}
              </FormItem>
              <FormItem className='my-4 space-y-4'>
                <FormLabel>Kisaran Budget</FormLabel>
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.budget_range}
                    name='budget_range'
                    className='py-5'
                    placeholder='10 - 15 Juta'
                  />
                </FormControl>
                {errors.budget_range && touched.budget_range && (
                  <FormMessage>{errors.budget_range}</FormMessage>
                )}
              </FormItem>
              <FormItem className='my-4 space-y-4'>
                <FormLabel>Bagaimana Kamu Menemukan Kami</FormLabel>
                <FormControl className='w-full'>
                  <Select
                    onValueChange={(e) => setFieldValue('find_us', e)}
                    value={values.find_us}
                    defaultValue={values.find_us}
                    name='find_us'
                  >
                    <SelectTrigger className='h-10 w-full'>
                      <SelectValue placeholder='' />
                    </SelectTrigger>
                    <SelectContent className='w-full'>
                      <SelectGroup className='w-full'>
                        {FIND_US.map((value, index) => (
                          <SelectItem key={index} value={value.value}>
                            {value.value}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                {errors.find_us && touched.find_us && (
                  <FormMessage>{errors.find_us}</FormMessage>
                )}
              </FormItem>
              <FormItem className='my-4 space-y-4'>
                <FormLabel>Mengapa Kamu Memilih Kami</FormLabel>
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.why_us}
                    name='why_us'
                    className='py-5'
                    placeholder='Tulis disini'
                  />
                </FormControl>
                {errors.why_us && touched.why_us && (
                  <FormMessage>{errors.why_us}</FormMessage>
                )}
              </FormItem>
              <FormItem className='my-4 space-y-4'>
                <FormLabel>
                  Apa yang anda harapkan dari Fix Creative Photography untuk
                  mengabadikan moment indahmu?
                </FormLabel>
                <FormControl>
                  <Textarea
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    name='message'
                    className='py-5'
                    placeholder='Tulis disini'
                  />
                </FormControl>
                {errors.message && touched.message && (
                  <FormMessage>{errors.message}</FormMessage>
                )}
              </FormItem>
              <Button
                type='submit'
                variant='default'
                className='w-full'
                disabled={isSubmitting}
                isLoading={isSubmitting}
                size='lg'
              >
                Dapatkan Price List
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <footer className='mt-8 text-sm font-semibold text-gray-400'>
        Powered by <a href='https://towedd.com'>Towedd</a>
      </footer>
    </div>
  );
}

export default IndexPage;
