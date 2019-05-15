import React from "react";
import gql from "graphql-tag";
import useData from "../__Components/useData";
import { Formik, Form } from "formik";
import { TextInputFormik, PrimaryButton } from "@starrez/starryui";
import * as Yup from "yup";
import useMutation from "../__Components/useMutation";

interface Entry {
    entry: {
        Id: string;
        NameFirst: string;
        NameLast: string;
    }
};

const ENTRY = gql`
    query Entry($id: ID) {
        entry(Id: $id) {
            Id
            NameFirst
            NameLast
        }
    }
`;

const UPDATE = gql`
    mutation UpdateEntryName($params: EntryInput) {
        updateEntryName(params: $params)
    }
`;

const EntryEditorHooks = ({ EntryId }) => {
    const { Data, Loading } = useData<Entry>(ENTRY, { id: EntryId });
    const [ Mutate ] = useMutation(UPDATE)

    if (Loading) return <div>Loading...</div>

    const handleOnSubmit = (params) => {
        Mutate(params);
        alert("saved!")
    }

    return (
        <Formik
            initialValues={Data.entry}

            validationSchema={Yup.object().shape({
                NameFirst: Yup.string().required("Last Name is required"),
                NameLast: Yup.string().required("Last Name is required"),
            })}
            onSubmit={handleOnSubmit}
            render={(formikProps) => {
                return (
                    <Form>
                        <TextInputFormik
                            Label="Name First"
                            ShowRequired
                            Name="NameFirst"
                            FormikProps={formikProps}
                        />

                        <TextInputFormik
                            Label="Name Last"
                            ShowRequired
                            Name="NameLast"
                            FormikProps={formikProps}
                        />

                        <PrimaryButton Caption="Save Entry" Type="submit" />

                    </Form>
                );
            }}
        />
    );
}

export default EntryEditorHooks